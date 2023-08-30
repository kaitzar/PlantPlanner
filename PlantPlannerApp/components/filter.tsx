import React, { useState } from 'react';
import { View, Button, StyleSheet, Text} from 'react-native';
import { FilterSettings } from '../definitions/filterTypes';


type FiltersProps = {
  onApplyFilters: (filters: FilterSettings) => void;
};

const Filters: React.FC<FiltersProps> = ({ onApplyFilters }) => {
  const [type, setType] = useState< "all" | "Vine" | "Tree" | "Succulent" | "Shrub" | "Herb" | "Grass" | "Fern">('all');
  const [summer_irrigation, setSummerIrrigation] = useState< "all" | "Keep Moist" | "1x/month" | "2x/month" | "3x/month" | "Never">('all');
  const [ease_of_care, setEaseOfCare] = useState< "all" | "Very Easy" | "Moderately Easy" | "Fairly Difficult">('all');
  const [sunset_zones, setSunsetZones] = useState<'desert' | 'coast' | 'mountains'>('coast');
  const [sun, setSun] = useState<"all" | "Full Shade" | "Mixed Shade/Sun" | "Full Sun">('all');

  const handleTypeChange = (newType: "all" | "Vine" | "Tree" | "Succulent" | "Shrub" | "Herb" | "Grass" | "Fern") => {
    setType(newType);
  };
  
  const handleSummerIrrigationChange = (newSummerIrrigation: "all" | "Keep Moist" | "1x/month" | "2x/month" | "3x/month" | "Never") => {
    setSummerIrrigation(newSummerIrrigation);
  };
  
  const handleEaseOfCareChange = (newEaseOfCare: "all" | "Very Easy" | "Moderately Easy" | "Fairly Difficult") => {
    setEaseOfCare(newEaseOfCare);
  };
  
  const handleSunChange = (newSun: "all" | "Full Shade" | "Mixed Shade/Sun" | "Full Sun") => {
    setSun(newSun);
  };
    
  const handleSunsetZonesChange = (newSunsetZones: 'coast' | 'desert' | 'mountains') => {
    setSunsetZones(newSunsetZones);
  };
  
  return (
    <View style={styles.container}>
      <Text>Type:</Text>
      <Button title="Vine" onPress={() => setType('Vine')} />
      <Button title="Tree" onPress={() => setType('Tree')} />
      <Button title="Succulent" onPress={() => setType('Succulent')} />
      <Button title="Shrub" onPress={() => setType('Shrub')} />
      <Button title="Herb" onPress={() => setType('Herb')} />
      <Button title="Grass" onPress={() => setType('Grass')} />
      <Button title="Fern" onPress={() => setType('Fern')} />


      <Text>Ease of Care:</Text>
      <Button title="Very Easy" onPress={() => setEaseOfCare('Very Easy')} />
      <Button title="Moderately Easy" onPress={() => setEaseOfCare('Moderately Easy')} />
      <Button title="Fairly Difficult" onPress={() => setEaseOfCare('Fairly Difficult')} />

      <Text>Where to Grow:</Text>
      <Button title="Mountains" onPress={() => setSunsetZones('mountains')} />
      <Button title="Coast" onPress={() => setSunsetZones('coast')} />
      <Button title="Desert" onPress={() => setSunsetZones('desert')} />

      <Text>Summer Irrigation:</Text>
      <Button title="Keep Moist" onPress={() => setSummerIrrigation('Keep Moist')} />
      <Button title="1x/month" onPress={() => setSummerIrrigation('1x/month')} />
      <Button title="2x/month" onPress={() => setSummerIrrigation('2x/month')} />
      <Button title="3x/month" onPress={() => setSummerIrrigation('3x/month')} />
      <Button title="Never" onPress={() => setSummerIrrigation('Never')} />

      <Text>Sun:</Text>
      <Button title= "Full Shade" onPress={() => setSun('Full Shade')} />
      <Button title="Mixed Shade/Sun" onPress={() => setSun('Mixed Shade/Sun')} />
      <Button title="Full Sun" onPress={() => setSun('Full Sun')} />


      <Button 
        title="Apply Filters" 
        onPress={() => onApplyFilters({ 
        type: [type], 
        ease_of_care: [ease_of_care], 
        sunset_zones: [sunset_zones], 
        summer_irrigation: [summer_irrigation], 
        sun: [sun]
    })}
/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default Filters;