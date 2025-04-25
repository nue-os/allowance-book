import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { addTransaction } from '../store/transactionsSlice'

const useLocalStorage = key => {
  const dispatch = useDispatch()

  const getList = useCallback(() => {
    try {
      const stored = localStorage.getItem(key)
      return stored ? JSON.parse(stored) : []
    } catch (err) {
      console.log('[error] ', err)
      return []
    }
  }, [key])

  const addItem = useCallback(
    item => {
      try {
        const list = getList()
        const id = list.length > 0 ? list[list.length - 1].id + 1 : 1
        const newItem = { ...item, id }
        const newList = [...list, newItem]
        localStorage.setItem(key, JSON.stringify(newList))
        dispatch(addTransaction(newItem))
      } catch (err) {
        console.log('[error] ', err)
      }
    },
    [key, getList]
  )

  const removeItem = useCallback(
    id => {
      try {
        const list = getList()

        const filterdList = list.filter(item => item.id !== id)
        localStorage.setItem(key, JSON.stringify(filterdList))
      } catch (err) {
        console.log('[error] ', err)
      }
    },
    [key, getList]
  )

  return { getList, addItem, removeItem }
}

export default useLocalStorage
