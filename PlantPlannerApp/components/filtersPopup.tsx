import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Modal, TouchableOpacity, ScrollView } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { FilterSettings, Type, SunsetZones, SummerIrrigation, EaseOfCare, Sun} from '../definitions/filterTypes';

interface FiltersPopupProps {
  isVisible: boolean;
  onApplyFilters: (filters: FilterSettings) => void;
  onClose: () => void;
}

const FiltersPopup: React.FC<FiltersPopupProps> = ({ isVisible, onApplyFilters, onClose }) => {
  const [filters, setFilters] = useState<FilterSettings>({
    type: [],
    sun: [],
    sunset_zones: [],
    summer_irrigation: [],
    ease_of_care: [],
  });

  const updateFilter = (key: keyof FilterSettings, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: (prevFilters[key] as string[]).includes(value)
        ? (prevFilters[key] as string[]).filter((item: string) => item !== value)
        : [...(prevFilters[key] as string[]), value],
    }));
};
  const [openSubheaders, setOpenSubheaders] = useState<{
    easeOfCare: boolean;
    type: boolean;
    summerIrrigation: boolean;
    sun: boolean;
    whereToGrow: boolean;
  }>({
    easeOfCare: false,
    type: false,
    summerIrrigation: false,
    sun: false,
    whereToGrow: false,
  });


  const plantTypes: Type[] = ['Fern', 'Grass', 'Herb', 'Shrub', 'Succulent', 'Vine'];
  const plantSunsetZones: SunsetZones[] = ['desert', 'coast', 'mountains'];
  const plantSummerIrrigation: SummerIrrigation[] = ['Keep Moist', '1x/month', '2x/month', '3x/month', 'Never'];
  const plantEaseOfCare: EaseOfCare[] = ['Very Easy', 'Moderately Easy', 'Fairly Difficult'];
  const plantSun: Sun[] = ['Full Shade', 'Mixed Shade/Sun', 'Full Sun'];

  return (
    <Modal visible={isVisible} transparent={true} onRequestClose={onClose}>
      <View style={styles.popupContainer}>
        <ScrollView contentContainerStyle={styles.popupContentContainer} showsVerticalScrollIndicator={false}>
          <Text style={styles.popupTitle}>Filters</Text>

          <Text 
            style={styles.sectionHeader} 
            onPress={() => setOpenSubheaders(prevState => ({
              ...prevState, 
              easeOfCare: !prevState.easeOfCare
            }))}
          >
            Ease of Care
          </Text>
          {openSubheaders.easeOfCare && plantEaseOfCare.map((ease_of_care) => (
            <View key={ease_of_care} style={styles.checkboxContainer}>
                <CheckBox
                  value={filters.ease_of_care.includes(ease_of_care)}
                  onValueChange={() => updateFilter('ease_of_care', ease_of_care)}
                />
                <Text style={styles.checkboxLabel}>{ease_of_care}</Text>
              </View>
            ))}

            <Text 
              style={styles.sectionHeader} 
              onPress={() => setOpenSubheaders(prevState => ({
                ...prevState, 
                type: !prevState.type
              }))}
            >
              Type
            </Text>
            {openSubheaders.type && plantTypes.map((type) => (
              <View key={type} style={styles.checkboxContainer}>
                  <CheckBox
                    value={filters.type.includes(type)}
                    onValueChange={() => updateFilter('type', type)}
                  />
                  <Text style={styles.checkboxLabel}>{type}</Text>
                </View>
            ))}

          <Text 
            style={styles.sectionHeader} 
            onPress={() => setOpenSubheaders(prevState => ({
              ...prevState, 
              summerIrrigation: !prevState.summerIrrigation
            }))}
          >
            Summer Irrigation (once established)
          </Text>
          {openSubheaders.summerIrrigation && plantSummerIrrigation.map((summer_irrigation) => (
            <View key={summer_irrigation} style={styles.checkboxContainer}>
              <CheckBox
                value={filters.summer_irrigation.includes(summer_irrigation)}
                onValueChange={() => updateFilter('summer_irrigation', summer_irrigation)}
              />
              <Text style={styles.checkboxLabel}>{summer_irrigation}</Text>
            </View>
          ))}

          <Text 
            style={styles.sectionHeader} 
            onPress={() => setOpenSubheaders(prevState => ({
              ...prevState, 
              sun: !prevState.sun
            }))}
          >
            Sun
          </Text>
          {openSubheaders.sun && plantSun.map((sun) => (
            <View key={sun} style={styles.checkboxContainer}>
              <CheckBox
                value={filters.sun.includes(sun)}
                onValueChange={() => updateFilter('sun', sun)}
              />
              <Text style={styles.checkboxLabel}>{sun}</Text>
            </View>
          ))}

          <Text 
            style={styles.sectionHeader} 
            onPress={() => setOpenSubheaders(prevState => ({
              ...prevState, 
              whereToGrow: !prevState.whereToGrow
            }))}
          >
            Where to Grow
          </Text>
          {openSubheaders.whereToGrow && plantSunsetZones.map((sunset_zones) => (
            <View key={sunset_zones} style={styles.checkboxContainer}>
              <CheckBox
                value={filters.sunset_zones.includes(sunset_zones)}
                onValueChange={() => updateFilter('sunset_zones', sunset_zones)}
              />
              <Text style={styles.checkboxLabel}>{sunset_zones}</Text>
            </View>
          ))}


        </ScrollView>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
              style={styles.applyButton}
              onPress={() => {
                  onApplyFilters(filters);
                  onClose();
              }}
          >
              <Text style={styles.applyButtonText}>Apply Filters</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.closeButton} 
            onPress={() => {
              setFilters({
                  type: [],
                  sun: [],
                  sunset_zones: [],
                  summer_irrigation: [],
                  ease_of_care: [],
              });
              onClose();
              
            }}
            >
              <Text style={styles.closeButtonText}>Cancel</Text>
          </TouchableOpacity>
       </View>
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
    paddingTop: 70,
    paddingBottom: 70,
  },
popupContentContainer: {
    width: Dimensions.get('window').width * 0.9,
    backgroundColor: '#F1ECCE',
    borderRadius: 20,
    padding: 20,
    paddingBottom: 30,
    paddingTop: 30,
    marginTop: 20
  },
popupTitle: {
    fontSize: 25,
    fontFamily: 'Belleza-Regular',
    color: '#0F4203',
    textAlign: 'center',
    marginVertical: 5,
  },
sectionHeader: {
    fontSize: 20,
    fontFamily: 'Belleza-Regular',
    color: '#0F4203',
    marginTop: 20,
    marginBottom: 10
  },
checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
checkboxLabel: {
    fontSize: 16,
    fontFamily: 'PublicSans-Light',
    fontWeight:'400',
    color: '#0F4203',
    marginLeft: 10,
  },

buttonContainer: {
    width: Dimensions.get('window').width * 0.9,
    flexDirection: 'row',
    justifyContent: 'space-between', 
    padding: 10,
},

applyButton: {
  backgroundColor: '#F1ECCE',
  borderRadius: 20,
  padding: 10,
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
  marginRight: 5,
},

applyButtonText: {
  color: '#0F4203',
  fontSize: 16,
},

closeButton: {
  backgroundColor: '#F1ECCE',
  borderRadius: 20,
  padding: 10,
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
  marginLeft: 5,
},

closeButtonText: {
  color: '#0F4203',
  fontSize: 16,
},

horizontalContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
},

});

export default FiltersPopup;
