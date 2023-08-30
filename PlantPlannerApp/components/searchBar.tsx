import React from 'react';
import {StyleSheet} from 'react-native';
import { SearchBar } from '@rneui/base';

interface SearchProps {
  searchTerm: string;
  onChangeSearchTerm: (text: string) => void;
  placeholder: string;
}

const SearchComponent = ({ searchTerm, onChangeSearchTerm, placeholder }: SearchProps) => {

  return (
      <SearchBar 
        containerStyle={styles.searchBarContainer} 
        inputContainerStyle={styles.searchBarInput} 
        inputStyle={styles.inputStyle}
        placeholderTextColor= '#0F420380'
        onChangeText={onChangeSearchTerm}
        onClear={() => onChangeSearchTerm('')}
        placeholder={placeholder}
        searchIcon={{
          name: 'search',
          color: '#0F4203',
          size: 24
        }}
        value={searchTerm}
      />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  itemStyle: {
    padding: 10,
  },

  searchBarContainer: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0
  },

  searchBarInput: {
    backgroundColor: '#F1ECCE',
    borderRadius: 20,
    
  },

  inputStyle: {
    fontFamily: 'PublicSans-Light',
    fontWeight:'300',
    color: '#0F4203'

  }


});

export default SearchComponent;
