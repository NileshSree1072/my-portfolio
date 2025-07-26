#!/usr/bin/env python3
"""
Backend API Testing Script
Tests all backend endpoints to ensure proper functionality
"""

import requests
import json
import sys
import os
from datetime import datetime

# Get backend URL from frontend .env file
def get_backend_url():
    try:
        with open('/app/frontend/.env', 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    return line.split('=', 1)[1].strip()
    except Exception as e:
        print(f"Error reading frontend .env: {e}")
        return None

BACKEND_URL = get_backend_url()
if not BACKEND_URL:
    print("❌ Could not get backend URL from frontend/.env")
    sys.exit(1)

API_BASE = f"{BACKEND_URL}/api"
print(f"🔗 Testing backend at: {API_BASE}")

def test_root_endpoint():
    """Test the root API endpoint"""
    print("\n📍 Testing GET /api/")
    try:
        response = requests.get(f"{API_BASE}/", timeout=10)
        if response.status_code == 200:
            data = response.json()
            if data.get("message") == "Hello World":
                print("✅ Root endpoint working correctly")
                return True
            else:
                print(f"❌ Unexpected response: {data}")
                return False
        else:
            print(f"❌ Root endpoint failed with status {response.status_code}")
            print(f"Response: {response.text}")
            return False
    except requests.exceptions.RequestException as e:
        print(f"❌ Root endpoint request failed: {e}")
        return False

def test_create_status_check():
    """Test creating a status check"""
    print("\n📍 Testing POST /api/status")
    try:
        test_data = {
            "client_name": "test_client_backend_api"
        }
        response = requests.post(f"{API_BASE}/status", 
                               json=test_data, 
                               headers={"Content-Type": "application/json"},
                               timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            required_fields = ["id", "client_name", "timestamp"]
            
            if all(field in data for field in required_fields):
                if data["client_name"] == test_data["client_name"]:
                    print("✅ Status check creation working correctly")
                    print(f"   Created status check with ID: {data['id']}")
                    return True, data["id"]
                else:
                    print(f"❌ Client name mismatch: expected {test_data['client_name']}, got {data['client_name']}")
                    return False, None
            else:
                missing_fields = [field for field in required_fields if field not in data]
                print(f"❌ Missing required fields: {missing_fields}")
                return False, None
        else:
            print(f"❌ Status check creation failed with status {response.status_code}")
            print(f"Response: {response.text}")
            return False, None
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Status check creation request failed: {e}")
        return False, None

def test_get_status_checks():
    """Test retrieving status checks"""
    print("\n📍 Testing GET /api/status")
    try:
        response = requests.get(f"{API_BASE}/status", timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            if isinstance(data, list):
                print(f"✅ Status checks retrieval working correctly")
                print(f"   Retrieved {len(data)} status checks")
                
                # Verify structure of returned items
                if len(data) > 0:
                    first_item = data[0]
                    required_fields = ["id", "client_name", "timestamp"]
                    if all(field in first_item for field in required_fields):
                        print("   Status check structure is correct")
                        return True
                    else:
                        missing_fields = [field for field in required_fields if field not in first_item]
                        print(f"❌ Status check items missing fields: {missing_fields}")
                        return False
                else:
                    print("   No status checks found (empty list)")
                    return True
            else:
                print(f"❌ Expected list, got {type(data)}")
                return False
        else:
            print(f"❌ Status checks retrieval failed with status {response.status_code}")
            print(f"Response: {response.text}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Status checks retrieval request failed: {e}")
        return False

def test_backend_health():
    """Test overall backend health"""
    print("\n🏥 Testing Backend Health")
    
    # Test if backend is responding at all
    try:
        response = requests.get(BACKEND_URL, timeout=5)
        print(f"✅ Backend server is responding (status: {response.status_code})")
    except requests.exceptions.RequestException as e:
        print(f"❌ Backend server not responding: {e}")
        return False
    
    return True

def run_all_tests():
    """Run all backend tests"""
    print("🚀 Starting Backend API Tests")
    print("=" * 50)
    
    results = []
    
    # Test backend health
    health_result = test_backend_health()
    results.append(("Backend Health", health_result))
    
    if not health_result:
        print("\n❌ Backend health check failed. Stopping tests.")
        return False
    
    # Test root endpoint
    root_result = test_root_endpoint()
    results.append(("Root Endpoint", root_result))
    
    # Test status check creation
    create_result, created_id = test_create_status_check()
    results.append(("Create Status Check", create_result))
    
    # Test status check retrieval
    get_result = test_get_status_checks()
    results.append(("Get Status Checks", get_result))
    
    # Print summary
    print("\n" + "=" * 50)
    print("📊 TEST SUMMARY")
    print("=" * 50)
    
    all_passed = True
    for test_name, result in results:
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{test_name}: {status}")
        if not result:
            all_passed = False
    
    print("\n" + "=" * 50)
    if all_passed:
        print("🎉 ALL BACKEND TESTS PASSED!")
        print("Backend API is working correctly.")
    else:
        print("💥 SOME BACKEND TESTS FAILED!")
        print("Backend API has issues that need attention.")
    
    return all_passed

if __name__ == "__main__":
    success = run_all_tests()
    sys.exit(0 if success else 1)