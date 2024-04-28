import CrNavBar from '../../components/CrNavBar';

interface Props {
    children?: React.ReactNode;
}

const HomeLayout = ({children}:Props) => {
  return (
    <>
        <CrNavBar />
        {children}
    </>
  )
}

export default HomeLayout
