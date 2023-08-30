import React, { useState, useEffect } from 'react';
import { ScrollView, View, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Grid, Row } from 'react-native-easy-grid';
import Search from '../components/searchBar';
import PlantPreview from '../components/plantPreview';
import Plant from '../definitions/plant';
import PlantDetails from '../components/plantDetails';
import FilterPopup from '../components/filtersPopup';
import { FilterSettings, Type, SunsetZones, SummerIrrigation, EaseOfCare, Sun} from '../definitions/filterTypes';


const AllPlantsScreen: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [plants, setPlants] = useState<Plant[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<Plant[]>([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);
  const [filterSettings, setFilterSettings] = useState<FilterSettings | null>(null);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const fetchPlants = async () => {
    try {
      const response = await fetch('http://localhost:3000/allplants');
      const data = await response.json();
      setPlants(data);
      setFilteredPlants(data);
    } catch (error) {
      console.error('Error fetching plants:', error);
    }
  };

  useEffect(() => {
    fetchPlants();
  }, []);

  useEffect(() => {
    let filtered = plants;
  
    // Filter by search term if it exists
    if (searchTerm) {
      filtered = filtered.filter((plant) => 
        plant.com_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  
    // Filter by Type
  if (filterSettings?.type?.length) {
    filtered = filtered.filter((plant) => filterSettings.type.includes(plant.type as Type));
  }

  // Filter by Sun
  if (filterSettings?.sun?.length) {
    filtered = filtered.filter((plant) => filterSettings.sun.includes(plant.sun as Sun));
  }

  // Filter by Sunset Zones
  if (filterSettings?.sunset_zones?.length) {
    filtered = filtered.filter((plant) => filterSettings.sunset_zones.includes(plant.sunset_zones as SunsetZones));
  }

  // Filter by Summer Irrigation
  if (filterSettings?.summer_irrigation?.length) {
    filtered = filtered.filter((plant) => filterSettings.summer_irrigation.includes(plant.summer_irrigation as SummerIrrigation));
  }

  // Filter by Ease of Care
  if (filterSettings?.ease_of_care?.length) {
    filtered = filtered.filter((plant) => filterSettings.ease_of_care.includes(plant.ease_of_care as EaseOfCare));
  }
  
    setFilteredPlants(filtered);
  }, [searchTerm, plants, filterSettings]);
  

const handleApplyFilters = (filters: FilterSettings | null) => {
  setFilterSettings(filters);
  setIsFilterModalOpen(false);
  if (!filters) {
    setFilteredPlants(plants);
  }
};

  const handlePlantPress = (plant: Plant) => {
    setSelectedPlant(plant);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <Grid>
  <Row size={25} style={styles.topRow}>
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>All Plants</Text>
      </View>
      <View style={styles.filtersContainer}>
        <TouchableOpacity style={styles.gridButton} onPress={() => setIsFilterModalOpen(true)}>
          <Text style={styles.filterButtonText}>Filters</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.searchBarContainer}>
        <Search searchTerm={searchTerm} onChangeSearchTerm={setSearchTerm} placeholder="Search all plants" />
      </View>
    </View>
  </Row>
  <Row size={75} style={styles.bottomRow}>
    <ScrollView style={{ flex: 1, width: '100%' }}>
      {filteredPlants.map((plant) => (
        <PlantPreview key={plant.id} plant={plant} onPress={() => handlePlantPress(plant)} />
      ))}
    </ScrollView>
  </Row>
  {isPopupOpen && selectedPlant && <PlantDetails plant={selectedPlant} onClose={handleClosePopup} />}
  
  <FilterPopup 
   isVisible={isFilterModalOpen} 
   onApplyFilters={handleApplyFilters}
   onClose={() => setIsFilterModalOpen(false)} 
/>
</Grid>

  );
};

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  topRow: {
    backgroundColor: '#82A269',
    justifyContent: 'center',
    flex: 1,
    paddingTop: height * 0.1,
  },

  bottomRow: {
    backgroundColor: '#82A269',
    flex: 2.5,
    flexDirection: 'column',
  },

  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  titleContainer: {
    marginBottom: 10,
  },

  titleText: {
    fontFamily: 'Belleza-Regular',
    fontSize: 50,
    color: '#0F4203',
    textAlign: 'center',
  },

  filtersContainer: {
    marginBottom: 10,
  },

  gridButton: {
    paddingVertical: 5,
  },

  filterButtonText: {
    fontFamily: 'PublicSans-Light',
    fontWeight:'400',
    fontSize: 24,
    color: '#0F4203',
    textAlign: 'center'
  },

  searchBarContainer: {
    justifyContent: 'center',
    // alignItems: 'center',
    width: 350,
  },

  gridRow: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderColor: '#0F4203',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  
  buttonContainer: {
    alignItems: 'center',
    marginTop: 5,
  },

  // filterButtonIcon:{
  //   fontFamily: 'ionicons',
  //   fontSize: 24,
  //   color: '#0F4203',
  // },
});



export default AllPlantsScreen