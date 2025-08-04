import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import Text from "./Text";
import { Icon } from "@iconify/react/dist/iconify.js";
import Section from "./Section";

export default function MyGoogleMap() {
  const API_KEY = import.meta.env.VITE_MAPS_API_KEY;

  const tuitionLocation = { lat: 1.345666, lng: 103.854643 };

  return (
    <APIProvider apiKey={API_KEY}>
      <Map
        className="absolute inset-0"
        defaultCenter={tuitionLocation}
        defaultZoom={17}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
        clickableIcons={false}
      >
        <Marker
          position={tuitionLocation}
          label={{
            text: "Ancourage Academy",
            className: "!text-[#a81a1a] ml-[65%]",
          }}
        />
        <div className="absolute bg-white p-2 top-2 left-2 w-[20rem] max-[426px]:w-fit shadow-[4px_6px_10px_#00000025]">
          <Section layout="col">
            <Text
              size="xs"
              className="!text-[var(--black)] font-medium max-[426px]:text-[1rem]"
            >
              Ancourage Academy
            </Text>
            <Text size="xxs" className="max-[426px]:text-[0.8rem]">
              Bishan St.11, #02-215, 570152 Block 152, Singapore 570152
            </Text>
            <Section className="items-center gap-1">
              <Text size="xxs" className="max-[426px]:text-[0.8rem]">
                5.0
              </Text>
              <Section>
                {[...Array(5)].map(() => (
                  <Icon
                    icon="material-symbols:star"
                    color="var(--teal)"
                    className="text-[1rem]"
                  />
                ))}
              </Section>
            </Section>
            <a
              href="https://maps.google.com/maps?ll=1.345662,103.854525&z=15&t=m&hl=en-GB&gl=US&mapclient=embed&cid=2682097270898112732"
              className="text-[.8rem] text-[#1C74E8] mt-[10px]"
            >
              View on larger map
            </a>
          </Section>
        </div>
      </Map>
    </APIProvider>
  );
}
