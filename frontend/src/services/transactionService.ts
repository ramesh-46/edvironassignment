// transactions.service.ts (Frontend)
import axios from 'axios';
import { Transaction } from '../types/Transaction';

const API_BASE_URL = 'http://localhost:3001/transactions';

export const getTransactions = async (): Promise<Transaction[]> => {
  try {
    const response = await axios.get(API_BASE_URL); // No Authorization header
    console.log("Response in getTransactions", response);
    return response.data;
  } catch (error: any) {
    console.error("Error fetching transactions:", error);
    if (error.response) {
      console.error("Response data:", error.response.data);
      console.error("Response status:", error.response.status);
      console.error("Response headers:", error.response.headers);
    } else if (error.request) {
      console.error("Request:", error.request);
    } else {
      console.error('Error message:', error.message);
    }
    throw new Error(error.response?.data?.message || "Failed to fetch transactions");
  }
};

export const getTransactionBySchool = async (schoolId: string): Promise<Transaction[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/school/${schoolId}`); // No Authorization header
    console.log("Response in getTransactionBySchool", response);
    return response.data;
  } catch (error: any) {
    console.error("Error fetching transactions by school:", error);
    if (error.response) {
      console.error("Response data:", error.response.data);
      console.error("Response status:", error.response.status);
      console.error("Response headers:", error.response.headers);
    } else if (error.request) {
      console.error("Request:", error.request);
    } else {
      console.error('Error message:', error.message);
    }
    throw new Error(error.response?.data?.message || "Failed to fetch transactions by school");
  }
};

export const getTransactionByCustomId = async (customId: string): Promise<Transaction> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/status/${customId}`); // No Authorization header
    console.log("Response in getTransactionByCustomId", response);
    return response.data;
  } catch (error: any) {
    console.error("Error fetching transaction by custom id:", error);
    if (error.response) {
      console.error("Response data:", error.response.data);
      console.error("Response status:", error.response.status);
      console.error("Response headers:", error.response.headers);
    } else if (error.request) {
      console.error("Request:", error.request);
    } else {
      console.error('Error message:', error.message);
    }
    throw new Error(error.response?.data?.message || "Failed to fetch transaction by custom id");
  }
};