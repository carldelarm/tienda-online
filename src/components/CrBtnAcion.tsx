import { IconButton } from "@mui/material"
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

interface Props {
    isCheck: boolean;
    handleCheck?: () => void;
    handleShow?: () => void;
    isShow?: boolean;
}

const CrBtnAcion = ({isCheck,handleCheck,handleShow,isShow=false}:Props) => {
    return (
        <>
            {isShow ? (
                <IconButton onClick={handleShow}>
                    <RemoveRedEyeIcon color="primary" />
                </IconButton>
            ) : (
                <IconButton onClick={handleCheck}>
                    {!isCheck ? <LibraryAddIcon color="primary" /> : <LibraryAddCheckIcon color="success"/>}
                </IconButton>
            )}

        </>
    )
}

export default CrBtnAcion
