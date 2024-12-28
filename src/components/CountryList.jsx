import Spinner from './Spinner';
import Message from './Message';
import styles from './CountryList.module.css';
import CountryItem from './CountryItem';

const CountryList = ({ cities, isLoading }) => {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message
        message={'Add your first city by cliking on a city on the map'}
      />
    );

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem key={Math.random()} country={country} />
      ))}
    </ul>
  );
};

export default CountryList;