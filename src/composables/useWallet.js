import { ref, onMounted, onUnmounted } from 'vue'
import { ethers } from 'ethers'

// Network configurations
const POLYGON_MAINNET = {
  chainId: '0x89',
  chainName: 'Polygon Mainnet',
  nativeCurrency: {
    name: 'MATIC',
    symbol: 'MATIC',
    decimals: 18
  },
  rpcUrls: ['https://polygon-rpc.com'],
  blockExplorerUrls: ['https://polygonscan.com']
}

const POLYGON_MUMBAI = {
  chainId: '0x13881',
  chainName: 'Polygon Mumbai',
  nativeCurrency: {
    name: 'MATIC',
    symbol: 'MATIC',
    decimals: 18
  },
  rpcUrls: ['https://rpc-mumbai.maticvigil.com'],
  blockExplorerUrls: ['https://mumbai.polygonscan.com']
}

// Use Mumbai for development, Mainnet for production
const NETWORK_CONFIG = import.meta.env.PROD ? POLYGON_MAINNET : POLYGON_MUMBAI

// State variables
const isWalletConnected = ref(false)
const walletAddress = ref('')
const provider = ref(null)
const signer = ref(null)
const networkName = ref('')
const isCorrectNetwork = ref(false)
const balance = ref('0')

// Loading and error states
const isConnecting = ref(false)
const isSwitchingNetwork = ref(false)
const error = ref('')
const errorTimeout = ref(null)

export function useWallet() {
  const showError = (message, duration = 5000) => {
    error.value = message
    if (errorTimeout.value) clearTimeout(errorTimeout.value)
    errorTimeout.value = setTimeout(() => {
      error.value = ''
    }, duration)
  }

  const checkNetwork = async () => {
    try {
      if (!provider.value) return false
      const network = await provider.value.getNetwork()
      networkName.value = network.name === 'unknown' ? 'Polygon' : network.name
      isCorrectNetwork.value = network.chainId === parseInt(NETWORK_CONFIG.chainId)
      return isCorrectNetwork.value
    } catch (err) {
      console.error('Error checking network:', err)
      showError('Failed to check network status')
      return false
    }
  }

  const updateBalance = async () => {
    try {
      if (!provider.value || !walletAddress.value) return
      const rawBalance = await provider.value.getBalance(walletAddress.value)
      balance.value = ethers.formatEther(rawBalance)
    } catch (err) {
      console.error('Error updating balance:', err)
      showError('Failed to update balance')
    }
  }

  const switchToPolygon = async () => {
    if (!window.ethereum) {
      showError('MetaMask is not installed')
      return
    }

    isSwitchingNetwork.value = true
    error.value = ''

    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: NETWORK_CONFIG.chainId }],
      })
    } catch (switchError) {
      // This error code indicates that the chain has not been added to MetaMask
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [NETWORK_CONFIG],
          })
        } catch (addError) {
          console.error('Error adding network:', addError)
          showError('Failed to add Polygon network')
        }
      } else {
        console.error('Error switching network:', switchError)
        showError('Failed to switch network')
      }
    } finally {
      isSwitchingNetwork.value = false
    }
  }

  const connectWallet = async () => {
    if (!window.ethereum) {
      showError('Please install MetaMask to connect your wallet')
      return
    }

    isConnecting.value = true
    error.value = ''

    try {
      provider.value = new ethers.BrowserProvider(window.ethereum)
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
      
      if (accounts.length === 0) {
        throw new Error('No accounts found')
      }

      walletAddress.value = accounts[0]
      signer.value = await provider.value.getSigner()
      isWalletConnected.value = true

      // Check network and switch if needed
      const isOnCorrectNetwork = await checkNetwork()
      if (!isOnCorrectNetwork) {
        await switchToPolygon()
      }

      await updateBalance()
    } catch (err) {
      console.error('Error connecting wallet:', err)
      showError(err.message || 'Failed to connect wallet')
      disconnectWallet()
    } finally {
      isConnecting.value = false
    }
  }

  const disconnectWallet = () => {
    isWalletConnected.value = false
    walletAddress.value = ''
    provider.value = null
    signer.value = null
    networkName.value = ''
    isCorrectNetwork.value = false
    balance.value = '0'
    error.value = ''
  }

  const handleAccountsChanged = async (accounts) => {
    if (accounts.length === 0) {
      disconnectWallet()
    } else if (accounts[0] !== walletAddress.value) {
      walletAddress.value = accounts[0]
      await updateBalance()
    }
  }

  const handleChainChanged = async () => {
    // Reload the page as recommended by MetaMask
    window.location.reload()
  }

  const handleDisconnect = () => {
    disconnectWallet()
  }

  onMounted(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', handleAccountsChanged)
      window.ethereum.on('chainChanged', handleChainChanged)
      window.ethereum.on('disconnect', handleDisconnect)
    }
  })

  onUnmounted(() => {
    if (window.ethereum) {
      window.ethereum.removeListener('accountsChanged', handleAccountsChanged)
      window.ethereum.removeListener('chainChanged', handleChainChanged)
      window.ethereum.removeListener('disconnect', handleDisconnect)
    }
    if (errorTimeout.value) {
      clearTimeout(errorTimeout.value)
    }
  })

  const formatAddress = (address) => {
    if (!address) return ''
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  const formatBalance = (value) => {
    if (!value) return '0.00'
    const formatted = parseFloat(value).toFixed(4)
    return formatted.replace(/\.?0+$/, '')
  }

  return {
    // State
    isWalletConnected,
    walletAddress,
    networkName,
    isCorrectNetwork,
    balance,
    isConnecting,
    isSwitchingNetwork,
    error,
    
    // Methods
    connectWallet,
    disconnectWallet,
    switchToPolygon,
    formatAddress,
    formatBalance,
    
    // Provider and signer (for contract interactions)
    provider,
    signer
  }
} 