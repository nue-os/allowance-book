import React, { useCallback } from 'react'

const useLocalStorage = key => {
  const getList = useCallback(() => {
    try {
      const stored = localStorage.getItem(key)
      return stored ? JSON.parse(stored) : []
    } catch (err) {
      console.log('[error] ', err)
    }
  }, [key])

  const addItem = useCallback(
    item => {
      try {
        const list = getList()
        const id = list.length > 0 ? list[list.length - 1].id + 1 : 1
        const newList = [...list, { ...item, id }]
        localStorage.setItem(key, JSON.stringify(newList))
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
