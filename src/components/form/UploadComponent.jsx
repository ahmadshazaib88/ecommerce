// import React, { useState } from "react";
// import Button from "@material-ui/core/Button";
// import { DropzoneDialog } from "material-ui-dropzone";
// import useStyles from "../../styles";

// export default function UploadComponent(props) {
//   const classes = useStyles();

//   const [open, setOpen] = useState(false);
//   return (
//     <div className={classes.paper}>
//       <Button variant="contained" color="primary" onClick={() => setOpen(true)} fullWidth>
//         {props.label}
//       </Button>

//       <DropzoneDialog
//         acceptedFiles={["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"]}
//         cancelButtonText={"cancel"}
//         submitButtonText={"submit"}
//         // filesLimit={1}
//         // maxFileSize={5000000}
//         open={open}
//         onClose={() => setOpen(false)}
//         onSave={(files) => {
//           props.onChange(files)
//           setOpen(false);
//         }}
//         showPreviews={true}
//         showFileNamesInPreview={true}
//       />
//     </div>
//   );
// }
