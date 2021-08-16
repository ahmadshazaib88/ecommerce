import React from 'react';
import Modal from '@material-ui/core/Modal';
import Modal3 from '../widgets/modals/Modal3';
import PencilAltIcon from "../../icons/PencilAlt";
import { IconButton, Button, Autocomplete, TextField } from '@material-ui/core';
import useAuth from "../../hooks/useAuth";

import { devices } from "../../api"
import useEntityHooks from "../../hooks/useEntityHooks";

const LinkDeviceModal = ({ name }) => {
    const { user } = useAuth();
    const [open, setOpen] = React.useState(false);
    const { getAllQuery, createMutation, updateMutation, deleteMutation } =
        useEntityHooks("devices", devices);

    const { data } = getAllQuery({});

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const availableDevices = data?.docs?.map((d) => ({ label: d._id, value: d._id }))
    const body = (
        <>
            <Autocomplete
                style={{ width: '300' }}
                options={availableDevices?.map(d => d.value)}
                getOptionLabel={option => option}
                renderInput={(params) => (
                    <TextField
                        sx={{
                            minWidth: '300',
                        }}
                        label="Available Devices"
                        {...params}
                    />)}
            />

            <Button
                color="primary"
                size="large"
                sx={{ ml: 2 }}
                variant="contained"
                onClick={handleClose}
            >
                Link
            </Button>
        </>
    )

    return (
        <>
            <IconButton onClick={handleOpen}>
                <PencilAltIcon color="primary" fontSize="small" />
            </IconButton>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Modal3
                    closeModal={handleClose}
                    title={`Link ${name} to Device`}
                    body={body}
                />
            </Modal>
        </>
    );
}

export default LinkDeviceModal;