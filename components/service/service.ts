const baseURL = 'http://10.0.2.2:3000';

export const getProducts = async () => {
    try {
      const response = await fetch(`${baseURL}/product`);
      if (!response.ok) {
        throw new Error('Erro ao buscar dados da API');
      }
      return await response.json();
    } catch (error) {
      console.error('Erro ao chamar API:', error);
      throw error;
    }
  };