'use client';

import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Activity, 
  Heart, 
  Users, 
  Settings, 
  ChevronDown, 
  ChevronRight, 
  Edit, 
  Trash2 
} from 'lucide-react';
import Link from 'next/link';

const ProfilePage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber1: '',
    email1: '',
    nationality: '',
    birthday: '',
    nieNumber: '',
    anssNumber: '',
    passportNumber: '',
    maritalStatus: '',
    keySafeNumber: '',
    spousesName: '',
    allergies: '',
    hearingProblems: '',
    mobilityIssues: '',
    emergencyContact1Name: '',
    emergencyContact1Tel: '',
    emergencyContact2Name: '',
    emergencyContact2Tel: '',
    emergencyContact3Name: '',
    emergencyContact3Tel: '',
    keyHolder1Name: '',
    keyHolder1Tel: '',
    keyHolder2Name: '',
    keyHolder2Tel: '',
    keyHolder3Name: '',
    keyHolder3Tel: '',
    medicalCondition1: '',
    medicalCondition2: '',
    medicalCondition3: '',
    medicalCondition4: '',
    medicalCondition5: '',
    medicationName1: '',
    medicationName2: '',
    medicationName3: '',
    medicationName4: '',
    medicationName5: '',
    bloodGroup: '',
    doctorsName: '',
    location: '',
    doctorsNumber: '',
    medicalCentre: '',
    privateMedicalDetailsPolicyNumber: '',
    funeralPlanPolicyNumber: '',
    deathFuneralWishes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
      {/* Header */}
      <div className="w-full bg-[#008B8B] text-white p-4 fixed top-0 left-0">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">
            <Link href="/">
              <span className="cursor-pointer">Member Dashboard</span>
            </Link>
          </div>
          <div>
            <Link href="/profile">
              <span className="cursor-pointer text-lg font-medium">Profile</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto mt-20 p-8 max-w-4xl bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Profile</h2>
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#008B8B]"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#008B8B]"
              />
            </div>
            <div>
              <label htmlFor="phoneNumber1" className="block text-gray-700 font-medium mb-2">
                Phone Number 1
              </label>
              <input
                type="tel"
                id="phoneNumber1"
                name="phoneNumber1"
                value={formData.phoneNumber1}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#008B8B]"
              />
            </div>
            <div>
              <label htmlFor="email1" className="block text-gray-700 font-medium mb-2">
                Email 1
              </label>
              <input
                type="email"
                id="email1"
                name="email1"
                value={formData.email1}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#008B8B]"
              />
            </div>
            <div>
              <label htmlFor="nationality" className="block text-gray-700 font-medium mb-2">
                Nationality
              </label>
              <input
                type="text"
                id="nationality"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#008B8B]"
              />
            </div>
            <div>
              <label htmlFor="birthday" className="block text-gray-700 font-medium mb-2">
                Birthday
              </label>
              <input
                type="date"
                id="birthday"
                name="birthday"
                value={formData.birthday}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#008B8B]"
              />
            </div>
            <div>
              <label htmlFor="nieNumber" className="block text-gray-700 font-medium mb-2">
                NIE Number (Spain Only)
              </label>
              <input
                type="text"
                id="nieNumber"
                name="nieNumber"
                value={formData.nieNumber}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#008B8B]"
              />
            </div>
            <div>
              <label htmlFor="anssNumber" className="block text-gray-700 font-medium mb-2">
                AN/SS Number (Spain Only)
              </label>
              <input
                type="text"
                id="anssNumber"
                name="anssNumber"
                value={formData.anssNumber}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#008B8B]"
              />
            </div>
            <div>
              <label htmlFor="passportNumber" className="block text-gray-700 font-medium mb-2">
                Passport Number
              </label>
              <input
                type="text"
                id="passportNumber"
                name="passportNumber"
                value={formData.passportNumber}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#008B8B]"
              />
            </div>
            <div>
              <label htmlFor="maritalStatus" className="block text-gray-700 font-medium mb-2">
                Marital Status
              </label>
              <select
                id="maritalStatus"
                name="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#008B8B]"
              >
                <option value="">Select Marital Status</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="divorced">Divorced</option>
                <option value="widowed">Widowed</option>
              </select>
            </div>
            <div>
              <label htmlFor="keySafeNumber" className="block text-gray-700 font-medium mb-2">
                Key Safe Number
              </label>
              <input
                type="text"
                id="keySafeNumber"
                name="keySafeNumber"
                value={formData.keySafeNumber}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#008B8B]"
              />
            </div>
            <div>
              <label htmlFor="spousesName" className="block text-gray-700 font-medium mb-2">
                Spouse's Name
              </label>
              <input
                type="text"
                id="spousesName"
                name="spousesName"
                value={formData.spousesName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#008B8B]"
              />
            </div>
            <div>
              <label htmlFor="allergies" className="block text-gray-700 font-medium mb-2">
                Allergies
              </label>
              <textarea
                id="allergies"
                name="allergies"
                value={formData.allergies}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#008B8B]"
              />
            </div>
            <div>
              <label htmlFor="hearingProblems" className="block text-gray-700 font-medium mb-2">
                Hearing Problems?
              </label>
              <select
                id="hearingProblems"
                name="hearingProblems"
                value={formData.hearingProblems}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#008B8B]"
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div>
              <label htmlFor="mobilityIssues" className="block text-gray-700 font-medium mb-2">
                Mobility Issues?
              </label>
              <select
                id="mobilityIssues"
                name="mobilityIssues"
                value={formData.mobilityIssues}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#008B8B]"
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div>
              <label htmlFor="emergencyContact1Name" className="block text-gray-700 font-medium mb-2">
                Emergency Contact 1 - Name
              </label>
              <input
                type="text"
                id="emergencyContact1Name"
                name="emergencyContact1Name"
                value={formData.emergencyContact1Name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#008B8B]"
              />
            </div>
            <div>
              <label htmlFor="emergencyContact1Tel" className="block text-gray-700 font-medium mb-2">
                Emergency Contact 1 - Tel
              </label>
              <input
                type="tel"
                id="emergencyContact1Tel"
                name="emergencyContact1Tel"
                value={formData.emergencyContact1Tel}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#008B8B]"
              />
            </div>
            <div>
              <label htmlFor="emergencyContact2Name" className="block text-gray-700 font-medium mb-2">
                Emergency Contact 2 - Name
              </label>
              <input
                type="text"
                id="emergencyContact2Name"
                name="emergencyContact2Name"
                value={formData.emergencyContact2Name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#008B8B]"
              />
            </div>
            <div>
              <label htmlFor="emergencyContact2Tel" className="block text-gray-700 font-medium mb-2">
                Emergency Contact 2 - Tel
              </label>
              <input
                type="tel"
                id="emergencyContact2Tel"
                name="emergencyContact2Tel"
                value={formData.emergencyContact2Tel}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#008B8B]"
              />
            </div>
            <div>
              <label htmlFor="emergencyContact3Name" className="block text-gray-700 font-medium mb-2">
                Emergency Contact 3 - Name
              </label>
              <input
                type="text"
                id="emergencyContact3Name"
                name="emergencyContact3Name"
                value={formData.emergencyContact3Name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#008B8B]"
              />
            </div>
            <div>
              <label htmlFor="emergencyContact3Tel" className="block text-gray-700 font-medium mb-2">
                Emergency Contact 3 - Tel
              </label>
              <input
                type="tel"
                id="emergencyContact3Tel"
                name="emergencyContact3Tel"
                value={formData.emergencyContact3Tel}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#008B8B]"
              />
            </div>
            <div>
              <label htmlFor="keyHolder1Name" className="block text-gray-700 font-medium mb-2">
                Key Holder 1 - Name
              </label>
              <input
                type="text"
                id="keyHolder1Name"
                name="keyHolder1Name"
                value={formData.keyHolder1Name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#008B8B]"
              />
            </div>
            <div>
              <label htmlFor="keyHolder1Tel" className="block text-gray-700 font-medium mb-2">
                Key Holder 1 - Tel
              </label>
              <input
                type="tel"
                id="keyHolder1Tel"
                name="keyHolder1Tel"
                value={formData.keyHolder1Tel}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#008B8B]"
              />
            </div>
            <div>
              <label htmlFor="keyHolder2Name" className="block text-gray-700 font-medium mb-2">
                Key Holder 2 - Name
              </label>
              <input
                type="text"
                id="keyHolder2Name"
                name="keyHolder2Name"
                value={formData.keyHolder2Name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#008B8B]"
              />
            </div>
            <div>
              <label htmlFor="keyHolder2Tel" className="block text-gray-700 font-medium mb-2">
                Key Holder 2 - Tel
              </label>
              <input
                type="tel"
                id="keyHolder2Tel"
                name="keyHolder2Tel"
                value={formData.keyHolder2Tel}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#008B8B]"
              />
            </div>
            <div>
              <label htmlFor="keyHolder3Name" className="block text-gray-700 font-medium mb-2">
                Key Holder 3 - Name
              </label>
              <input
                type="text"
                id="keyHolder3Name"
                name="keyHolder3Name"
                value={formData.keyHolder3Name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#008B8B]"
              />
            </div>
            <div>
              <label htmlFor="keyHolder3Tel" className="block text-gray-700 font-medium mb-2">
                Key Holder 3 - Tel
              </label>
              <input
                type="tel"
                id="keyHolder3Tel"
                name="keyHolder3Tel"
                value={formData.keyHolder3Tel}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#008B8B]"
              />
            </div>
            <div>
              <label htmlFor="medicalCondition1" className="block text-gray-700 font-medium mb-2">
                Medical Condition 1
              </label>
              <input
                type="text"
                id="medicalCondition1"
                name="medicalCondition1"
                value={formData.medicalCondition1}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#008B8B]"
              />
            </div>
            <div>
              <label htmlFor="medicalCondition2" className="block text-gray-700 font-medium mb-2">
                Medical Condition 2
              </label>
              <input
                type="text"
                id="medicalCondition2"
                name="medicalCondition2"
                value={formData.medicalCondition2}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#008B8B]"
              />
            </div>
            <div>
              <label htmlFor="medicalCondition3" className="block text-gray-700 font-medium mb-2">
                Medical Condition 3
              </label>
              <input
                type="text"
                id="medicalCondition3"
                name="medicalCondition3"
                value={formData.medicalCondition3}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#008B8B]"
              />
            </div>
            <div>
              <label htmlFor="medicalCondition4" className="block text-gray-700 font-medium mb-2">
                Medical Condition 4
              </label>
              <input
                type="text"
                id="medicalCondition4"
                name="medicalCondition4"
                value={formData.medicalCondition4}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#008B8B]"
              />
            </div>
            <div>
              <label htmlFor="medicalCondition5" className="block text-gray-700 font-medium mb-2">
                Medical Condition 5
              </label>
              <input
                type="text"
                id="medicalCondition5"
                name="medicalCondition5"
                value={formData.medicalCondition5}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#008B8B]"
              />
            </div>
            <div>
              <label htmlFor="medicationName1" className="block text-gray-700 font-medium mb-2">
                Medication Name 1
              </label>
              <input
                type="text"
                id="medicationName1"
                name="medicationName1"
                value={formData.medicationName1}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#008B8B]"
              />
            </div>
            <div>
              <label htmlFor="medicationName2" className="block text-gray-700 font-medium mb-2">
                Medication Name 2
              </label>
              <input
                type="text"
                id="medicationName2"
                name="medicationName2"
                value={formData.medicationName2}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#008B8B]"
              />
            </div>
            <div>
              <label htmlFor="medicationName3" className="block text-gray-700 font-medium mb-2">
                Medication Name 3
              </label>
              <input
                type="text"
                id="medicationName3"
                name="medicationName3"
                value={formData.medicationName3}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#008B8B]"
              />
            </div>
            <div>
              <label htmlFor="medicationName4" className="block text-gray-700 font-medium mb-2">
                Medication Name 4
              </label>
              <input
                type="text"
                id="medicationName4"
                name="medicationName4"
                value={formData.medicationName4}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#008B8B]"
              />
            </div>
            <div>
              <label htmlFor="medicationName5" className="block text-gray-700 font-medium mb-2">
                Medication Name 5
              </label>
              <input
                type="text"
                id="medicationName5"
                name="medicationName5"
                value={formData.medicationName5}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#008B8B]"
              />
            </div>
            <div>
              <label htmlFor="bloodGroup" className="block text-gray-700 font-medium mb-2">
                Blood Group
              </label>
              <input
                type="text"
                id="bloodGroup"
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#008B8B]"
              />
            </div>
            <div>
              <label htmlFor="doctorsName" className="block text-gray-700 font-medium mb-2">
                Doctor's Name
              </label>
              <input
                type="text"
                id="doctorsName"
                name="doctorsName"
                value={formData.doctorsName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#008B8B]"
              />
            </div>
            <div>
              <label htmlFor="location" className="block text-gray-700 font-medium mb-2">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#008B8B]"
              />
            </div>
            <div>
              <label htmlFor="doctorsNumber" className="block text-gray-700 font-medium mb-2">
                Doctor's Number
              </label>
              <input
                type="tel"
                id="doctorsNumber"
                name="doctorsNumber"
                value={formData.doctorsNumber}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#008B8B]"
              />
            </div>
            <div>
              <label htmlFor="medicalCentre" className="block text-gray-700 font-medium mb-2">
                Medical Centre
              </label>
              <input
                type="text"
                id="medicalCentre"
                name="medicalCentre"
                value={formData.medicalCentre}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#008B8B]"
              />
            </div>
            <div>
              <label htmlFor="privateMedicalDetailsPolicyNumber" className="block text-gray-700 font-medium mb-2">
                Private Medical Details Policy Number
              </label>
              <input
                type="text"
                id="privateMedicalDetailsPolicyNumber"
                name="privateMedicalDetailsPolicyNumber"
                value={formData.privateMedicalDetailsPolicyNumber}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#008B8B]"
              />
            </div>
            <div>
              <label htmlFor="funeralPlanPolicyNumber" className="block text-gray-700 font-medium mb-2">
                Funeral Plan Policy Number
              </label>
              <input
                type="text"
                id="funeralPlanPolicyNumber"
                name="funeralPlanPolicyNumber"
                value={formData.funeralPlanPolicyNumber}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#008B8B]"
              />
            </div>
            <div>
              <label htmlFor="deathFuneralWishes" className="block text-gray-700 font-medium mb-2">
                Death Funeral Wishes
              </label>
              <textarea
                id="deathFuneralWishes"
                name="deathFuneralWishes"
                value={formData.deathFuneralWishes}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#008B8B]"
              />
            </div>
          </form>
          <div className="mt-8 text-center">
            <button className="bg-[#008B8B] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#20B2AA] transition-colors">
              Save Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;