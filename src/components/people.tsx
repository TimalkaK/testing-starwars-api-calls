interface PeopleProps {
  people : StarWarsPeople;

}

const People : React.FC<PeopleProps> = ({people}) => {

  return(
    <h2>{people.name}</h2>
  );
}

export default People;