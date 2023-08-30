
import React, { useState } from 'react';
import { Image, View, Text, StyleSheet, Dimensions, Modal, TouchableOpacity, ScrollView } from 'react-native';
import Plant from '../definitions/plant';

interface PlantDetailsProps {
  plant: Plant;
  onClose: () => void;
}

type SectionKey = 'plantInformation' | 'wildlifeSupported' | 'landscapeInformation' | 'naturalSetting' | 'otherNames';

const PlantDetails: React.FC<PlantDetailsProps> = ({ plant, onClose }) => {
  const [isDescriptionExpanded, setDescriptionExpanded] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Record<SectionKey, boolean>>({
      plantInformation: false,
      wildlifeSupported: false,
      landscapeInformation: false,
      naturalSetting: false,
      otherNames: false,
  });

  const renderDescription = () => {
    if (isDescriptionExpanded) {
        return plant.description;
    }
    return `${plant.description.substring(0, 200)}...`;
};

  const toggleSection = (sectionKey: SectionKey) => {
      setExpandedSections((prevSections) => ({
          ...prevSections,
          [sectionKey]: !prevSections[sectionKey],
      }));
  };

  return (
    <Modal visible={true} transparent={true} onRequestClose={onClose}>
      <View style={styles.popupContainer}>
        <ScrollView
          contentContainerStyle={styles.popupContentContainer}
          showsVerticalScrollIndicator={false}
        >
          <Image source={{ uri: plant.image_url }} style={styles.popupImage} />
          <Text style={styles.popupComName}>{plant.com_name}</Text>
          <Text style={styles.popupSciName}>{plant.sci_name}</Text>
          
          <Text style={styles.popupDescription}>{renderDescription()}</Text>
          
          {isDescriptionExpanded ? (
            <TouchableOpacity onPress={() => setDescriptionExpanded(false)}>
              <Text style={styles.toggleDescriptionText}>Read less</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => setDescriptionExpanded(true)}>
              <Text style={styles.toggleDescriptionText}>Read more</Text>
            </TouchableOpacity>
          )}

          <Text 
            style={styles.sectionHeader} 
            onPress={() => toggleSection('plantInformation')}
          >
            {'Plant Information'}
          </Text>
          {expandedSections.plantInformation && (
            <>
              <Text style={styles.titleSpace}>
                <Text style={styles.titleText}>Type:</Text>
                <Text style={styles.valueText}>{plant.type ? plant.type : ' Information unavailable'}</Text>
              </Text>
              <Text style={styles.titleSpace}>
                <Text style={styles.titleText}>Size:</Text>
                <Text style={styles.valueText}>{plant.size ? plant.size : ' Information unavailable'}</Text>
              </Text>
              <Text style={styles.titleSpace}>
                <Text style={styles.titleText}>Growth Rate:</Text>
                <Text style={styles.valueText}>{plant.growth_rate ? plant.growth_rate : ' Information unavailable'}</Text>
              </Text>
              <Text style={styles.titleSpace}>
                <Text style={styles.titleText}>Dormancy:</Text>
                <Text style={styles.valueText}>{plant.dormancy ? plant.dormancy : ' Information unavailable'}</Text>
              </Text>
              <Text style={styles.titleSpace}>
                <Text style={styles.titleText}>Fragrance:</Text>
                <Text style={styles.valueText}>{plant.fragrance ? plant.fragrance : ' Information unavailable'}</Text>
              </Text >
              <Text style={styles.titleSpace}>
                <Text style={styles.titleText}>Flower Color:</Text>
                <Text style={styles.valueText}>{plant.flower_color ? plant.flower_color : ' Information unavailable'}</Text>
              </Text>
              <Text style={styles.titleSpace}>
                <Text style={styles.titleText}>Flowering Season:</Text>
                <Text style={styles.valueText}>{plant.flowering_season ? plant.flowering_season : ' Information unavailable'}</Text>
              </Text>
            </>
          )}

          <Text 
            style={styles.sectionHeader} 
            onPress={() => toggleSection('wildlifeSupported')}
          >
            {'Wildlife Supported'}
          </Text>
          {expandedSections.wildlifeSupported && (
            <Text style={styles.valueText}>{plant.wildlife_supported ? plant.wildlife_supported : 'Information unavailable'}</Text>
          )}

          <Text 
            style={styles.sectionHeader} 
            onPress={() => toggleSection('landscapeInformation')}
          >
            {'Landscape Information'}
          </Text>
          {expandedSections.landscapeInformation && (
            <>
              <Text style={styles.titleSpace}>
                <Text style={styles.titleText}>Sun:</Text>
                <Text style={styles.valueText}>{plant.sun ? plant.sun : ' Information unavailable'}</Text>
              </Text>
              <Text style={styles.titleSpace}>
                <Text style={styles.titleText}>Moisture:</Text>
                <Text style={styles.valueText}>{plant.moisture ? plant.moisture : ' Information unavailable'}</Text>
              </Text>
              <Text style={styles.titleSpace}>
                <Text style={styles.titleText}>Summer Irrigation (once established):</Text>
                <Text style={styles.valueText}>{plant.summer_irrigation ? plant.summer_irrigation : ' Information unavailable'}</Text>
              </Text>
              <Text style={styles.titleSpace}>
                <Text style={styles.titleText}>Ease of Care:</Text>
                <Text style={styles.valueText}>{plant.ease_of_care ? plant.ease_of_care : ' Information unavailable'}</Text>
              </Text>
              <Text style={styles.titleSpace}>
                <Text style={styles.titleText}>Cold Tolernace:</Text>
                <Text style={styles.valueText}>{plant.cold_tolerance ? plant.cold_tolerance : ' Information unavailable'}</Text>
              </Text>
              <Text style={styles.titleSpace}>
                <Text style={styles.titleText}>Soil Drainage:</Text>
                <Text style={styles.valueText}>{plant.soil_drainage ? plant.soil_drainage : ' Information unavailable'}</Text>
              </Text>
              <Text style={styles.titleSpace}>
                <Text style={styles.titleText}>Soil Description:</Text>
                <Text style={styles.valueText}>{plant.soil_description ? plant.soil_description : ' Information unavailable'}</Text>
              </Text>
              <Text style={styles.titleSpace}>
                <Text style={styles.titleText}>Common Uses:</Text>
                <Text style={styles.valueText}>{plant.common_uses ? plant.common_uses : ' Information unavailable'}</Text>
              </Text>
              <Text style={styles.titleSpace}>
                <Text style={styles.titleText}>Maintenance:</Text>
                <Text style={styles.valueText}>{plant.maintenance ? plant.maintenance : ' Information unavailable'}</Text>
              </Text>
              <Text style={styles.titleSpace}>
                <Text style={styles.titleText}>Propagation:</Text>
                <Text style={styles.valueText}>{plant.propagation ? plant.propagation : ' Information unavailable'}</Text>
              </Text>
              <Text style={styles.titleSpace}>
                <Text style={styles.titleText}>Where to Grow:</Text>
                <Text style={styles.valueText}>{plant.sunset_zones ? plant.sunset_zones : ' Information unavailable'}</Text>
              </Text>
            </>
          )}

          <Text 
            style={styles.sectionHeader} 
            onPress={() => toggleSection('naturalSetting')}
          >
            {'Natural Setting'}
          </Text>
          {expandedSections.naturalSetting && (
            <>
              <Text style={styles.titleSpace}>
                <Text style={styles.titleText}>Site Type:</Text>
                <Text style={styles.valueText}>{plant.site_type ? plant.site_type : ' Information unavailable'}</Text>
              </Text>
              <Text style={styles.titleSpace}>
                <Text style={styles.titleText}>Climate:</Text>
                <Text style={styles.valueText}>{plant.climate ? plant.climate : ' Information unavailable'}</Text>
              </Text>
            </>
          )}

          <Text 
            style={styles.sectionHeader} 
            onPress={() => toggleSection('otherNames')}
          >
            {'Other Names'}
          </Text>
          {expandedSections.otherNames && (
            <Text style={styles.valueText}>{plant.common_names ? plant.common_names : 'Information unavailable'}</Text>
          )}

        </ScrollView>
        
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>Return to All Plants</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  popupContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 100,
    
  },
  popupContentContainer: {
    width: Dimensions.get('window').width * 0.9,
    backgroundColor: '#F1ECCE',
    borderRadius: 20,
    padding: 20,
    paddingBottom: 30,
    paddingTop: 30,
    marginBottom: 50, 
  },
  popupImage: {
    width: '100%',
    height: Dimensions.get('window').height * 0.2,
    borderRadius: 20,
  },
  popupComName: {
    fontSize: 25,
    fontFamily: 'Belleza-Regular',
    color: '#0F4203',
    marginVertical: 10,
  },
  popupSciName: {
    fontSize: 12,
    fontFamily: 'PublicSans-Light',
    fontWeight:'300',
    color: '#0F4203',
    fontStyle: 'italic'
  },

  popupDescription: {
    fontSize: 16,
    fontFamily: 'PublicSans-Light',
    fontWeight:'300',
    color: '#0F4203',
    lineHeight: 25,
    marginTop: 10
  },

  sectionHeader: {
    fontSize: 25,
    fontFamily: 'Belleza-Regular',
    color: '#0F4203',
    lineHeight: 25,
    marginTop: 30,
  },

  titleText: {
    fontSize: 16,
    fontFamily: 'PublicSans-Bold',
    color: '#0F4203',
    lineHeight: 25,
    marginTop: 10,
    fontWeight: '600',
  },
  
  valueText: {
    fontSize: 16,
    fontFamily: 'PublicSans-Light',
    fontWeight:'300',
    color: '#0F4203',
    lineHeight: 25,
    marginTop: 10,
  },

  popupPlantType: {
    fontSize: 16,
    fontFamily: 'Belleza-Regular',
    color: '#0F4203',
    lineHeight: 25,
    marginTop: 10
  },

  closeButton: {
    position: 'absolute', 
    bottom: 30, 
    alignSelf: 'center',
    backgroundColor: '#F1ECCE',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
},

  closeButtonText: {
    color: '#0F4203',
    fontSize: 16,
  },

  toggleDescriptionText: {
    fontSize: 16,
    fontFamily: 'PublicSans-Light',
    fontWeight:'300',
    color: '#0F4203',
    textDecorationLine: 'underline',
    marginTop: 10,
    marginBottom: 20
  },

  titleSpace: {
    marginTop: 10
  }
});

export default PlantDetails;