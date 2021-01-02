import moment from "moment";

export const generateMessage = (from: string, text: string) => {
  return {
    from,
    text,
    createdAt: moment().valueOf(),
  };
};

export const generateLocationMessage = (
  from: string,
  location: { lat: string; long: string }
) => {
  return {
    from,
    url: `https://www.google.com/maps?q=${location.lat}, ${location.long}`,
    createdAt: moment().valueOf(),
  };
};
