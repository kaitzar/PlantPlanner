import React from 'react';
import { Image, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Plant from '../definitions/plant';

interface PlantPreviewProps {
  plant: Plant;
  onPress: (plant: Plant) => void;
}

const PlantPreview: React.FC<PlantPreviewProps> = ({ plant, onPress }) => {
  const handlePress = () => {
    onPress(plant);
  };

  return (
      <TouchableOpacity style={styles.container} onPress={handlePress}>
        <View style={styles.rowContainer}>
          {plant?.image_url && (
                <Image
                  source={{ uri: plant.image_url }}
                  alt="Plant"
                  style={styles.image}
                />
              )}
          <View style={styles.textContainer}>
            <Text style={styles.nameText}>{plant?.com_name || ''}</Text>
            <Text style={styles.descriptionText}>
              {plant?.description.length > 100
              ? plant.description.substring(0, 100) + "..."
              : plant.description}
            </Text>
          </View> 
        </View>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  
  container: {
    height: 100,
    margin:10,
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
  },

  image: {
    width: 100,
    height: 100,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'flex-start',
  },
  nameText: {
    fontFamily: 'Belleza-Regular',
    fontSize: 25,
    color: '#0F4203',
    textAlign: 'left',
    marginBottom: 10,
  },
  descriptionText: {
    fontFamily: 'PublicSans-Light',
    fontWeight:'300',
    fontSize: 14,
    color: '#0F4203',
    textAlign: 'left',
  },
});

export default PlantPreview;
