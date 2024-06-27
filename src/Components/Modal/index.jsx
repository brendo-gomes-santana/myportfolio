import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

import Backdrop from '@mui/material/Backdrop';

import {
    ContainerInfor,
    ContainerBox
} from './styled'

export default function ModalBase({ openModal, handleClosedModal, linkVideo, children, linkGit, title, id }) {

    return (
        <Modal
            open={openModal === id}
            onClose={() => handleClosedModal(0)}
            slots={{ backdrop: Backdrop }}
            closeAfterTransition
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={openModal === id}>
                <ContainerBox>
                    <ContainerInfor>
                        <video src={linkVideo} controls></video>
                    </ContainerInfor>
                    <ContainerInfor>
                        <h1>{title}</h1>
                        <p>
                            {children}
                        </p>

                        {linkGit !== '' && (
                            <a href={`https://github.com/brendo-gomes-santana/${linkGit}`} target='blank'>Projeto GitHub</a>
                        )}
                    </ContainerInfor>
                </ContainerBox>
            </Fade>
        </Modal>
    )
}