import { useEffect, useState } from "react";

const useGetLocationPosData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isTriggered, setIsTriggered] = useState(false);
  const [data, setData] = useState({ lat: 0, lng: 0 });
  const [error, setError] = useState<GeolocationPositionError>();

  useEffect(() => {
    if (isTriggered) {
      const getLocationPos = async () => {
        if (window.navigator) {
          try {
            setIsLoading(true);
            const result = await new Promise<GeolocationPosition>(
              (resolve, reject) =>
                window.navigator?.geolocation.getCurrentPosition(
                  resolve,
                  reject,
                ),
            );
            setData({
              lat: result.coords.latitude,
              lng: result.coords.longitude,
            });
          } catch (e) {
            setError(e as GeolocationPositionError);
          } finally {
            setIsLoading(false);
          }
        }
      };
      getLocationPos();
    }
  }, [isTriggered]);

  return { isLoading, trigger: () => setIsTriggered(true), error, data };
};

export default useGetLocationPosData;
