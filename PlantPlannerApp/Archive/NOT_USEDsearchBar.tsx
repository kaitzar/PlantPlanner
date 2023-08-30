import React from 'react';
import { View, TextInput, StyleSheet, Keyboard, Button } from 'react-native';
// import { Feather, Entypo } from '../assets/fonts';

interface SearchBarProps {
  searchTerm: string;
  onChangeSearchTerm: (text: string) => void;
  placeholder: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onChangeSearchTerm,
  placeholder,
}) => {
  return (
    <View style={styles.container}>
      {/* <Icon name="search-outline" style={styles.icon} /> */}
      <TextInput
        style={styles.input}
        value={searchTerm}
        onChangeText={onChangeSearchTerm}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1ECCE',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 15,
    marginVertical: 10,
    width: '90%',
  },
  icon: {
    fontSize: 25,
    color: '#C4C4C4',
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontFamily: 'PublicSans-Light',
    fontWeight: '300',
    fontSize: 18,
    color: '#0F4203',
  },
});

export default SearchBar;
