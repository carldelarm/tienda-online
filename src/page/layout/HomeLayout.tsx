import CrNavBar from '../../components/CrNavBar';

interface Props {
    children?: React.ReactNode;
    totalArticles?: number;
    handlePayment: () => void;
}

const HomeLayout = ({children, totalArticles, handlePayment}:Props) => {

  return (
    <>
      <CrNavBar numItemsAdd={totalArticles} handlePayment={handlePayment} />
      {children}
    </>
  )
}

export default HomeLayout
