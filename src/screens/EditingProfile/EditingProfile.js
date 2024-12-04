import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import styles from './styles';
import UserContext from '../../context/User';
import MainBtn from '../../ui/Buttons/MainBtn';

function EditingProfile() {
  const navigation = useNavigation(); // Initialize navigation
  const { profile } = useContext(UserContext);
  const [name, setName] = useState(profile?.name || '');
  const [phone, setPhone] = useState(profile?.phone || '');
  const [gender, setGender] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Gender options
  const genderOptions = ['Male', 'Female', 'Other', 'Prefer not to say'];

  // Handle gender selection
  const handleGenderSelect = (selectedGender) => {
    setGender(selectedGender);
    setIsDropdownOpen(false); // Close the dropdown after selection
  };

  const handleSave = () => {
    console.log('Profile Updated:', { name, phone, gender });
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* Header Section */}
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()} // Navigate back on button press
            >
              <FontAwesome name="arrow-left" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Complete Your Profile</Text>
            <Text style={styles.headerSubtitle}>
              Don’t worry, only you can see your personal data. No one else
              will be able to see it.
            </Text>
          </View>

          {/* Profile Image Section */}
          <View style={styles.profileImageContainer}>
            <FontAwesome name="user" style={styles.profileImage} />
            <TouchableOpacity style={styles.editIcon}>
              <MaterialIcons name="edit" size={20} color="white" />
            </TouchableOpacity>
          </View>

          {/* Form Section */}
          <View style={styles.formContainer}>
            {/* Name Input */}
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your name"
              value={name}
              onChangeText={setName}
            />

            {/* Phone Input */}
            <Text style={styles.label}>Phone Number</Text>
            <View style={styles.phoneContainer}>
              <Text style={styles.countryCode}>+1</Text>
              <TextInput
                style={styles.phoneInput}
                placeholder="Enter phone number"
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
              />
            </View>

            {/* Gender Dropdown */}
            <Text style={styles.label}>Gender</Text>
            <View>
              <TouchableOpacity
                style={styles.dropdown}
                onPress={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <Text style={styles.dropdownText}>{gender || 'Nothing selected'}</Text>
                <FontAwesome name="caret-down" size={16} color="#777" />
              </TouchableOpacity>
              {isDropdownOpen && (
                <View style={styles.dropdownList}>
                  {genderOptions.map((option, index) => (
                    <TouchableOpacity
                      key={index}
                      style={styles.dropdownItem}
                      onPress={() => handleGenderSelect(option)}
                    >
                      <Text style={styles.dropdownItemText}>{option}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
          </View>

          {/* Submit Button */}
          <MainBtn
            text="Complete Profile"
            onPress={handleSave}
            style={styles.mainButton}
            textStyle={styles.mainButtonText}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default EditingProfile;
