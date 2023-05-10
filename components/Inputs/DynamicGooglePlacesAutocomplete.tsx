import dynamic from 'next/dynamic';

const GooglePlacesAutocomplete = dynamic(
  () => import('react-google-places-autocomplete').then((mod) => mod.default),
  { ssr: false }
);

interface LanguageProps {
  language: 'en' | 'he';
}

export function DynamicGooglePlacesAutocomplete({
  language,
  ...props
}: LanguageProps & React.ComponentProps<typeof GooglePlacesAutocomplete>) {
  return (
    <GooglePlacesAutocomplete
      {...props}
      apiOptions={{ language }}
    />
  );
}