import Header from "../components/header/header";
import SearchBar from '../components/search-bar/search-bar';
import DeviceCard from '../components/device-card/device-card';
import LocationChip from '../components/location-chip/location-chip';
import { useEffect, useState } from 'react';
import MultiMediaHub from "../components/multi-media-hub/multi-media";

function Home() {

    // const devices = ["Main Light", "Ceiling Fan", "Night Light", "CCTV"];
  // const devices = [
  //   {image: "https://source.unsplash.com/KP7p0-DRGbg", location: "Living Room", name: "Main Light" },
  //   {image: "https://source.unsplash.com/sO5LtzSHpDQ", location: "Living Room", name: "Ceiling Fan" },
  //   {image: "https://source.unsplash.com/toX2sYnycCw", location: "Bed Room", name: "Night Light" },
  //   {image: "https://source.unsplash.com/ujSsIk5iZmA", location: "Living Room", name: "CCTV" }
  // ]


  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchValue, setSearchValue] = useState("");

  const handleSearchTyping = (value) => {
    setSearchValue(value);
    console.log(value);
  };

  useEffect( () => {
    const getDevices = async () => {
      const response = await fetch(
        "https://smart-home-ui-api-production.up.railway.app/api/devices", 
        {
          method:"GET",
          headers:{"Content-Type": "application/json"}
        }
      );
      const data = await response.json();
      // console.log(data.data);
      setDevices(data.data)
    };
    getDevices();
    setLoading(false);
  }, []) 

  const locations = ["All", "Living Room", "Bed Room"];

  const [selectedLocation, setSelectedLocation] = useState("All");

  const handleSelectedLocation = (location) => {
    setSelectedLocation(location)
  }

  const handleDeviceUpdate = (_id) => {
    setDevices((currentDevices) => {
      const updatedDevices = currentDevices.map((currentDevice) => {
        if (currentDevice._id === _id) {
          return {
            _id:currentDevice._id, 
            name:currentDevice.name, 
            image:currentDevice.image, 
            location:currentDevice.location,
            state: !currentDevice.state,
          };
        }
        return currentDevice;
      });
      return updatedDevices;
    });
  };

  const filteredDevices = 
    selectedLocation === "All" ? 
    devices.filter(( device ) => {
      return device.name
      .replace(" ", "")
      .toLowerCase()
      .includes(searchValue); 
    })    
    :
    devices.filter( (device) => {
    return (
      device.location === selectedLocation &&
      device.name.replace(" ", "").toLowerCase().includes(searchValue) 
    );
  });

    return (
        <div className='home'>
        <Header />
        <MultiMediaHub />

        <div className='devices_section'>
          <h1 className="devices_section_heading">Devices</h1>
          
          {/* Menu Bar */}
          <div className='menu_bar'>
            <div className='menubar_item_container'>
              {locations.map((location, i) => {
                return (
                  <LocationChip 
                    key={i}
                    location={location}
                    selectedLocation={selectedLocation}
                    handleSelectedLocation={handleSelectedLocation}
                  />
                );
              })}
            </div>
            <SearchBar handleSearchTyping={handleSearchTyping} searchValue={searchValue}/>
          </div>
          
          <div className='device_container'>
            {/* <DeviceCard 
              image="https://source.unsplash.com/KP7p0-DRGbg"
              name="Main Light"
            /> */}

            {!loading ? (
              filteredDevices.map((device, i) => {
                return (
                  <DeviceCard key={device._id} device={device} handleDeviceUpdate={handleDeviceUpdate}/>
                );
              })
            ) : (
              <h1>Loading...</h1>
            )}
          </div>
        </div>
      </div>
    )
}

export default Home;