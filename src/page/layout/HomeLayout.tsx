import CrNavBar from '../../components/CrNavBar';

interface Props {
    children?: React.ReactNode;
    totalArticles?: number;
    handlePayment: () => void;
}

const HomeLayout = ({children, handlePayment}:Props) => {

  return (
    <>
      <CrNavBar handlePayment={handlePayment} />
      {children}
    </>
  )
}

export default HomeLayout
