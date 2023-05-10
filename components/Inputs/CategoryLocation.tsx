import { useState, Dispatch, SetStateAction } from 'react';
import { geocodeByPlaceId } from 'react-google-places-autocomplete';
import { DynamicGooglePlacesAutocomplete } from './DynamicGooglePlacesAutocomplete'

interface locationType {
  label: string,
  place_id: string,
  lat: number,
  lng: number,
}

interface InputProps {
  lngId?: number;
  category: string;
  placeholder: string;
  inputValue: locationType;
  handleChange: Dispatch<SetStateAction<locationType>>;
  className?: string;
}

export default function Category({
  lngId = 0,
  category,
  placeholder = '',
  inputValue,
  handleChange,
  className,
}: InputProps) {
  const [selectedPlace, setSelectedPlace] = useState<any>(null);

  const handleSelect = async (place: any) => {
    setSelectedPlace(place);
    const geocode = await geocodeByPlaceId(place.value.place_id);
    const lat = geocode[0].geometry.location.lat();
    const lng = geocode[0].geometry.location.lng();
    handleChange({
      label: place.label,
      place_id: place.value.place_id,
      lat: lat,
      lng: lng,
    })
  }

  return (
    <div
      dir={lngId === 0 ? 'ltr' : 'rtl'}
      className={`flex flex-col gap-[6px] ${className}`}
    >
      {category !== '' && (
        <label
          className={`text-[14px] text-dark ${lngId === 0 ? 'text-left' : 'text-right'
            }`}
        >
          {category}
        </label>
      )}
      <DynamicGooglePlacesAutocomplete
        language={lngId === 0 ? 'en' : 'he'}
        onLoadFailed={(error) =>
          console.error('Could not inject Google script', error)
        }
        apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
        selectProps={{
          value: selectedPlace,
          onChange: handleSelect,
          placeholder: placeholder,
        }}
      />
    </div>
  );
}
