import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Auth = () => {
  const [mode, setMode] = useState('light')
  const [isLogin, setIsLogin] = useState(true)
  const [loginData, setLoginData] = useState({ email: '', password: '' })
  const [signupData, setSignupData] = useState({ name: '', email: '', password: '', confirmPassword: '' })
  const [message, setMessage] = useState('')

  // Light/Dark Mode persistence
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    setMode(savedTheme)
    document.documentElement.classList.toggle('dark', savedTheme === 'dark')
  }, [])

  const toggleTheme = () => {
    const newTheme = mode === 'light' ? 'dark' : 'light'
    setMode(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    setMessage('')
    try {
      const res = await axios.post('http://localhost:3000/api/user/login', loginData, {
        withCredentials: true
      })
      setMessage('Login successful!')
    } catch (err) {
      setMessage(err.response?.data?.message || 'Login failed')
    }
  }

  const handleSignup = async (e) => {
    e.preventDefault()
    setMessage('')
    if (signupData.password !== signupData.confirmPassword) {
      return setMessage('Passwords do not match')
    }
    try {
      const res = await axios.post('http://localhost:3000/api/user/register', signupData)
      setMessage('Registration successful!')
    } catch (err) {
      setMessage(err.response?.data?.message || 'Signup failed')
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10 bg-pastel-pink dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold tracking-wide text-gray-800 dark:text-white">Collectos</h1>
          <button
            onClick={toggleTheme}
            className="text-sm text-gray-500 dark:text-gray-300 border px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {mode === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>

        <div className="flex space-x-8 justify-center border-b pb-4">
          <button onClick={() => setIsLogin(true)} className={`font-semibold ${isLogin ? 'underline text-pink-600' : 'text-gray-600 dark:text-gray-300'}`}>
            LOGIN
          </button>
          <button onClick={() => setIsLogin(false)} className={`font-semibold ${!isLogin ? 'underline text-pink-600' : 'text-gray-600 dark:text-gray-300'}`}>
            SIGNUP
          </button>
        </div>

        {message && <p className="text-center mt-4 text-sm text-red-500">{message}</p>}

        {isLogin ? (
          <form onSubmit={handleLogin} className="mt-6 space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={loginData.email}
              onChange={e => setLoginData({ ...loginData, email: e.target.value })}
              className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={e => setLoginData({ ...loginData, password: e.target.value })}
              className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
              required
            />
            <div className="flex justify-between items-center">
              <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600">
                Login
              </button>
              <span className="text-sm text-gray-500 dark:text-gray-300">Forgot password?</span>
            </div>
          </form>
        ) : (
          <form onSubmit={handleSignup} className="mt-6 space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={signupData.name}
              onChange={e => setSignupData({ ...signupData, name: e.target.value })}
              className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={signupData.email}
              onChange={e => setSignupData({ ...signupData, email: e.target.value })}
              className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={signupData.password}
              onChange={e => setSignupData({ ...signupData, password: e.target.value })}
              className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={signupData.confirmPassword}
              onChange={e => setSignupData({ ...signupData, confirmPassword: e.target.value })}
              className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
              required
            />
            <p className="text-xs text-center text-gray-500 dark:text-gray-300">
              By signing up, you agree to our Terms and Privacy Policy
            </p>
            <button type="submit" className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600">
              Register
            </button>
          </form>
        )}
      </div>

      <footer className="flex justify-between items-center px-6 py-4 border-t border-gray-300 dark:border-gray-700 text-sm">
        <div className="space-x-6">
          <a href="#" className="hover:underline">Contact Us</a>
          <a href="#" className="hover:underline">Help</a>
        </div>
        <span className="text-center">© 2025 Collectos</span>
        <div>
          <a href="#" className="hover:underline">Social Networks</a>
        </div>
        </footer>
    </div>
  )
}

export default Auth
