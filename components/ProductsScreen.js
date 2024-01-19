import React, { useRef, useEffect } from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";

const ProductsScreen = () => {
  const swiperRef = useRef(null);
  const topProducts = [
    {
      id: 1,
      title: "Trycoderma",
      description: "Creme para a pele bioativo",
      image: require("../assets/Tricoderma.jpg"), // Substitua pelo caminho da imagem real
    },
    {
      id: 4,
      title: "Outro Produto",
      description: "Descrição do outro produto biológico",
      image: require("../assets/BIO.webp"), // Substitua pelo caminho da imagem real
    },
    {
      id: 5,
      title: "lalala",
      description: "Descrição do outro produto biológico",
      image: require("../assets/BIO.webp"), // Substitua pelo caminho da imagem real
    },
    {
      id: 6,
      title: "lalala",
      description: "Descrição do outro produto biológico",
      image: require("../assets/BIO.webp"), // Substitua pelo caminho da imagem real
    },
    // Adicione mais produtos conforme necessário
  ];

  const allProducts = [
    // Adicione mais produtos conforme necessário
    {
      id: 2,
      title: "Outro Produto",
      description: "Descrição do outro produto biológico",
      image: require("../assets/Tricoderma.jpg"), // Substitua pelo caminho da imagem real
    },
    {
      id: 3,
      title: "Outro Produto",
      description: "Descrição do outro produto biológico",
      image: require("../assets/BIO.webp"), // Substitua pelo caminho da imagem real
    },
    // ...
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (swiperRef.current) {
        swiperRef.current.scrollBy(1, true);
      }
    }, 7000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <ScrollView style={styles.container}>
      {/* Slides dos produtos mais vendidos */}
      <View style={styles.slidesContainer}>
        <Swiper
           loop
           autoplay={false} // Desativar a navegação automática para não interferir com o intervalo personalizado
           paginationStyle={styles.paginationContainer}
           dotStyle={styles.paginationDot}
           activeDotStyle={styles.paginationActiveDot}
           dotColor="gray"        // Cor das bolinhas
           activeDotColor="#DB1462"  // Cor da bolinha ativa
           ref={swiperRef}
        >
          {topProducts.map((product) => (
            <View key={product.id} style={styles.slide}>
              <Image source={product.image} style={styles.slideImage} />
              <Text style={styles.slideText}>{product.title}</Text>
              <Text style={styles.slideDescription}>{product.description}</Text>
            </View>
          ))}
        </Swiper>
      </View>

      {/* Lista de todos os produtos */}
      <View style={styles.productsContainer}>
        {allProducts.map((product) => (
          <View key={product.id} style={styles.productItem}>
            <Image source={product.image} style={styles.productImage} />
            <Text style={styles.productTitle}>{product.title}</Text>
            <Text style={styles.productDescription}>{product.description}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#24423D",
    padding: 16,
  },
  slidesContainer: {
    marginBottom: 20,
    height: 250,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  paginationContainer: {
    position: "absolute",
    bottom: 0, // Ajuste conforme necessário
    left: 0,
    right: 0,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  paginationActiveDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
  },
  slideImage: {
    width: "100%",
    height: 150,
    borderRadius: 8,
  },
  slideText: {
    color: "#DB1462",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  slideDescription: {
    color: "white",
    textAlign: "center",
  },
  productsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  productItem: {
    width: "48%", // Ajuste conforme necessário
    backgroundColor: "white",
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
  },
  productImage: {
    width: "100%",
    height: 150,
    marginBottom: 10,
    borderRadius: 4,
  },
  productTitle: {
    color: "#DB1462",
    fontSize: 16,
    fontWeight: "bold",
  },
  productDescription: {
    color: "black",
  },
});

export default ProductsScreen;
