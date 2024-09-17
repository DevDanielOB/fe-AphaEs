import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import { getProducts } from '@/components/service/service';

export default function DetailsScreen() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao buscar produtos:', error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (reload) {
      getProducts()
        .then((data) => {
          setProducts(data);
          setIsLoading(false);
          setReload(false);
        })
        .catch((error) => {
          console.error('Erro ao buscar produtos:', error);
          setIsLoading(false);
        });
    }
  }, [reload]);


  const handleReload = () => {
    setReload(true);
  };


  const renderProduct = ({ item }: { item: { id: number; name: string; price: number }}) => (
    <View style={styles.productItem}>
      <Text style={styles.productName}>{item.name.toLocaleUpperCase()}</Text>
      <Text style={styles.productDetails}>Preço: {item.price}</Text>
      
    </View>
  );

  const handleReloadPress = () => {
    handleReload();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Estoque</Text>
  
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={products.sort((a: any, b: any) => a.name.localeCompare(b.name))}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
  
      <Text style={styles.reload} onPress={handleReloadPress}>Recarregar</Text>
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    marginTop: 20,
    color: '#555',
  },
  productItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productDetails: {
    fontSize: 16,
    color: '#555',
  },
  reload: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    marginTop: 20,
    color: '#555',
  },
});
