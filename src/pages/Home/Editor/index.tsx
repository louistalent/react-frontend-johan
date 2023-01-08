import React, { useEffect, useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CirclePicker, BlockPicker } from "react-color";
// import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { DatePicker } from "antd";
import Img from "../../../assets/images/img1.webp";

import Button from "@mui/material/Button";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
// import stylesheets
import "./editor.scss";

// import labels
import SLabel1 from "../../../components/Label/SLabel1";

// import images
import myStore from "../../../useStore";

// import Img from "../../../assets/images/img1.webp";

import Label1 from "../../../components/Label/Label1";
import Label2 from "../../../components/Label/Label2";
import Label3 from "../../../components/Label/Label3";
import Label4 from "../../../components/Label/Label4";
import Label5 from "../../../components/Label/Label5";
import Label6 from "../../../components/Label/Label6";
import Label7 from "../../../components/Label/Label7";
import Label8 from "../../../components/Label/Label8";
import Label9 from "../../../components/Label/Label9";
import Label10 from "../../../components/Label/Label10";
import Label11 from "../../../components/Label/Label11";
import Label12 from "../../../components/Label/Label12";
import Label13 from "../../../components/Label/Label13";
import Label14 from "../../../components/Label/Label14";
import Label15 from "../../../components/Label/Label15";
import Label16 from "../../../components/Label/Label16";
import Label17 from "../../../components/Label/Label17";
import Label18 from "../../../components/Label/Label18";
import Label19 from "../../../components/Label/Label19";
import Label20 from "../../../components/Label/Label20";
import Label21 from "../../../components/Label/Label21";
import Label22 from "../../../components/Label/Label22";
import Label23 from "../../../components/Label/Label23";
import Label24 from "../../../components/Label/Label24";
import Label25 from "../../../components/Label/Label25";
import Label26 from "../../../components/Label/Label26";
import Label27 from "../../../components/Label/Label27";
import Label28 from "../../../components/Label/Label28";
import Label29 from "../../../components/Label/Label29";
import Label30 from "../../../components/Label/Label30";

// import labels
import { SBigLabel1 } from "../../../components/Label/SLabel1";

import { BigLabel1 } from "../../../components/Label/Label1";
import { BigLabel2 } from "../../../components/Label/Label2";
import { BigLabel3 } from "../../../components/Label/Label3";
import { BigLabel4 } from "../../../components/Label/Label4";
import { BigLabel5 } from "../../../components/Label/Label5";
import { BigLabel6 } from "../../../components/Label/Label6";
import { BigLabel7 } from "../../../components/Label/Label7";
import { BigLabel8 } from "../../../components/Label/Label8";
import { BigLabel9 } from "../../../components/Label/Label9";
import { BigLabel10 } from "../../../components/Label/Label10";
import { BigLabel11 } from "../../../components/Label/Label11";
import { BigLabel12 } from "../../../components/Label/Label12";
import { BigLabel13 } from "../../../components/Label/Label13";
import { BigLabel14 } from "../../../components/Label/Label14";
import { BigLabel15 } from "../../../components/Label/Label15";
import { BigLabel16 } from "../../../components/Label/Label16";
import { BigLabel17 } from "../../../components/Label/Label17";
import { BigLabel18 } from "../../../components/Label/Label18";
import { BigLabel19 } from "../../../components/Label/Label19";
import { BigLabel20 } from "../../../components/Label/Label20";
import { BigLabel21 } from "../../../components/Label/Label21";
import { BigLabel22 } from "../../../components/Label/Label22";
import { BigLabel23 } from "../../../components/Label/Label23";
import { BigLabel24 } from "../../../components/Label/Label24";
import { BigLabel25 } from "../../../components/Label/Label25";
import { BigLabel26 } from "../../../components/Label/Label26";
import { BigLabel27 } from "../../../components/Label/Label27";
import { BigLabel28 } from "../../../components/Label/Label28";
import { BigLabel29 } from "../../../components/Label/Label29";
import { BigLabel30 } from "../../../components/Label/Label30";

import { ScaleLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { blue } from "@mui/material/colors";

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;
  const G: any = myStore();

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <div style={{ height: "380px" }}>
        {G.curLabel === 0 ? (
          <SBigLabel1
            bottleName={G && G.bottleName}
            vol={G && G.vol}
            cl={G && G.cl}
            tagLine={G && G.tagLine}
            color={G && G.color}
            batchDate={G && G.batchDate}
            bottleType={G && G.bottleType}
            // file={file}
          />
        ) : G.curLabel === 1 ? (
          <BigLabel1
            bottleName={G && G.bottleName}
            vol={G && G.vol}
            cl={G && G.cl}
            tagLine={G && G.tagLine}
            color={G && G.color}
            batchDate={G && G.batchDate}
            bottleType={G && G.bottleType}
            // file={file}
          />
        ) : G.curLabel === 2 ? (
          <BigLabel2
            bottleName={G && G.bottleName}
            vol={G && G.vol}
            cl={G && G.cl}
            tagLine={G && G.tagLine}
            color={G && G.color}
            batchDate={G && G.batchDate}
            bottleType={G && G.bottleType}
            // file={file}
          />
        ) : G.curLabel === 3 ? (
          <BigLabel3
            bottleName={G && G.bottleName}
            vol={G && G.vol}
            cl={G && G.cl}
            tagLine={G && G.tagLine}
            color={G && G.color}
            batchDate={G && G.batchDate}
            bottleType={G && G.bottleType}
            // file={file}
          />
        ) : G.curLabel === 4 ? (
          <BigLabel4
            bottleName={G && G.bottleName}
            vol={G && G.vol}
            cl={G && G.cl}
            tagLine={G && G.tagLine}
            color={G && G.color}
            batchDate={G && G.batchDate}
            bottleType={G && G.bottleType}
            // file={file}
          />
        ) : G.curLabel === 5 ? (
          <BigLabel5
            bottleName={G && G.bottleName}
            vol={G && G.vol}
            cl={G && G.cl}
            tagLine={G && G.tagLine}
            color={G && G.color}
            batchDate={G && G.batchDate}
            bottleType={G && G.bottleType}
            // file={file}
          />
        ) : G.curLabel === 6 ? (
          <BigLabel6
            bottleName={G && G.bottleName}
            vol={G && G.vol}
            cl={G && G.cl}
            tagLine={G && G.tagLine}
            color={G && G.color}
            batchDate={G && G.batchDate}
            bottleType={G && G.bottleType}
            // file={file}
          />
        ) : G.curLabel === 7 ? (
          <BigLabel7
            bottleName={G && G.bottleName}
            vol={G && G.vol}
            cl={G && G.cl}
            tagLine={G && G.tagLine}
            color={G && G.color}
            batchDate={G && G.batchDate}
            bottleType={G && G.bottleType}
            // file={file}
          />
        ) : G.curLabel === 8 ? (
          <BigLabel8
            bottleName={G && G.bottleName}
            vol={G && G.vol}
            cl={G && G.cl}
            tagLine={G && G.tagLine}
            color={G && G.color}
            batchDate={G && G.batchDate}
            bottleType={G && G.bottleType}
            file={G && G.file}
          />
        ) : G.curLabel === 9 ? (
          <BigLabel9
            bottleName={G && G.bottleName}
            vol={G && G.vol}
            cl={G && G.cl}
            tagLine={G && G.tagLine}
            color={G && G.color}
            batchDate={G && G.batchDate}
            bottleType={G && G.bottleType}
            // file={file}
          />
        ) : G.curLabel === 10 ? (
          <BigLabel10
            bottleName={G && G.bottleName}
            vol={G && G.vol}
            cl={G && G.cl}
            tagLine={G && G.tagLine}
            color={G && G.color}
            batchDate={G && G.batchDate}
            bottleType={G && G.bottleType}
            // file={file}
          />
        ) : G.curLabel === 11 ? (
          <BigLabel11
            bottleName={G && G.bottleName}
            vol={G && G.vol}
            cl={G && G.cl}
            tagLine={G && G.tagLine}
            color={G && G.color}
            batchDate={G && G.batchDate}
            bottleType={G && G.bottleType}
            // file={file}
          />
        ) : G.curLabel === 12 ? (
          <BigLabel12
            bottleName={G && G.bottleName}
            vol={G && G.vol}
            cl={G && G.cl}
            tagLine={G && G.tagLine}
            color={G && G.color}
            batchDate={G && G.batchDate}
            bottleType={G && G.bottleType}
            // file={file}
          />
        ) : G.curLabel === 13 ? (
          <BigLabel13
            bottleName={G && G.bottleName}
            vol={G && G.vol}
            cl={G && G.cl}
            tagLine={G && G.tagLine}
            color={G && G.color}
            batchDate={G && G.batchDate}
            bottleType={G && G.bottleType}
            // file={file}
          />
        ) : G.curLabel === 14 ? (
          <BigLabel14
            bottleName={G && G.bottleName}
            vol={G && G.vol}
            cl={G && G.cl}
            tagLine={G && G.tagLine}
            color={G && G.color}
            batchDate={G && G.batchDate}
            bottleType={G && G.bottleType}
            // file={file}
          />
        ) : G.curLabel === 15 ? (
          <BigLabel15
            bottleName={G && G.bottleName}
            vol={G && G.vol}
            cl={G && G.cl}
            tagLine={G && G.tagLine}
            color={G && G.color}
            batchDate={G && G.batchDate}
            bottleType={G && G.bottleType}
            // file={file}
          />
        ) : G.curLabel === 16 ? (
          <BigLabel16
            bottleName={G && G.bottleName}
            vol={G && G.vol}
            cl={G && G.cl}
            tagLine={G && G.tagLine}
            color={G && G.color}
            batchDate={G && G.batchDate}
            bottleType={G && G.bottleType}
            // file={file}
          />
        ) : G.curLabel === 17 ? (
          <BigLabel17
            bottleName={G && G.bottleName}
            vol={G && G.vol}
            cl={G && G.cl}
            tagLine={G && G.tagLine}
            color={G && G.color}
            batchDate={G && G.batchDate}
            bottleType={G && G.bottleType}
            // file={file}
          />
        ) : G.curLabel === 18 ? (
          <BigLabel18
            bottleName={G && G.bottleName}
            vol={G && G.vol}
            cl={G && G.cl}
            tagLine={G && G.tagLine}
            color={G && G.color}
            batchDate={G && G.batchDate}
            bottleType={G && G.bottleType}
            // file={file}
          />
        ) : G.curLabel === 19 ? (
          <BigLabel19
            bottleName={G && G.bottleName}
            vol={G && G.vol}
            cl={G && G.cl}
            tagLine={G && G.tagLine}
            color={G && G.color}
            batchDate={G && G.batchDate}
            bottleType={G && G.bottleType}
            // file={file}
          />
        ) : G.curLabel === 20 ? (
          <BigLabel20
            bottleName={G && G.bottleName}
            vol={G && G.vol}
            cl={G && G.cl}
            tagLine={G && G.tagLine}
            color={G && G.color}
            batchDate={G && G.batchDate}
            bottleType={G && G.bottleType}
            // file={file}
          />
        ) : G.curLabel === 21 ? (
          <BigLabel21
            bottleName={G && G.bottleName}
            vol={G && G.vol}
            cl={G && G.cl}
            tagLine={G && G.tagLine}
            color={G && G.color}
            batchDate={G && G.batchDate}
            bottleType={G && G.bottleType}
            // file={file}
          />
        ) : G.curLabel === 22 ? (
          <BigLabel22
            bottleName={G && G.bottleName}
            vol={G && G.vol}
            cl={G && G.cl}
            tagLine={G && G.tagLine}
            color={G && G.color}
            batchDate={G && G.batchDate}
            bottleType={G && G.bottleType}
            // file={file}
          />
        ) : G.curLabel === 23 ? (
          <BigLabel23
            bottleName={G && G.bottleName}
            vol={G && G.vol}
            cl={G && G.cl}
            tagLine={G && G.tagLine}
            color={G && G.color}
            batchDate={G && G.batchDate}
            bottleType={G && G.bottleType}
            // file={file}
          />
        ) : G.curLabel === 24 ? (
          <BigLabel24
            bottleName={G && G.bottleName}
            vol={G && G.vol}
            cl={G && G.cl}
            tagLine={G && G.tagLine}
            color={G && G.color}
            batchDate={G && G.batchDate}
            bottleType={G && G.bottleType}
            // file={file}
          />
        ) : G.curLabel === 25 ? (
          <BigLabel25
            bottleName={G && G.bottleName}
            vol={G && G.vol}
            cl={G && G.cl}
            tagLine={G && G.tagLine}
            color={G && G.color}
            batchDate={G && G.batchDate}
            bottleType={G && G.bottleType}
            // file={file}
          />
        ) : G.curLabel === 26 ? (
          <BigLabel26
            bottleName={G && G.bottleName}
            vol={G && G.vol}
            cl={G && G.cl}
            tagLine={G && G.tagLine}
            color={G && G.color}
            batchDate={G && G.batchDate}
            bottleType={G && G.bottleType}
            // file={file}
          />
        ) : G.curLabel === 27 ? (
          <BigLabel27
            bottleName={G && G.bottleName}
            vol={G && G.vol}
            cl={G && G.cl}
            tagLine={G && G.tagLine}
            color={G && G.color}
            batchDate={G && G.batchDate}
            bottleType={G && G.bottleType}
            // file={file}
          />
        ) : G.curLabel === 28 ? (
          <BigLabel28
            bottleName={G && G.bottleName}
            vol={G && G.vol}
            cl={G && G.cl}
            tagLine={G && G.tagLine}
            color={G && G.color}
            batchDate={G && G.batchDate}
            bottleType={G && G.bottleType}
            // file={file}
          />
        ) : G.curLabel === 29 ? (
          <BigLabel29
            bottleName={G && G.bottleName}
            vol={G && G.vol}
            cl={G && G.cl}
            tagLine={G && G.tagLine}
            color={G && G.color}
            batchDate={G && G.batchDate}
            bottleType={G && G.bottleType}
            // file={file}
          />
        ) : (
          <BigLabel30
            bottleName={G && G.bottleName}
            vol={G && G.vol}
            cl={G && G.cl}
            tagLine={G && G.tagLine}
            color={G && G.color}
            batchDate={G && G.batchDate}
            bottleType={G && G.bottleType}
            // file={file}
          />
        )}
      </div>
    </Dialog>
  );
}

const Editor = () => {
  const [open, setOpen] = React.useState(false);

  const { T, update }: any = myStore();
  const G: any = myStore();
  const navigate = useNavigate();
  const [color, setColor] = useState("#111e0a");
  const [bottleName, setBottleName] = useState("");
  const [bottleType, setBottleType] = useState("");
  const [vol, setVol] = useState("");
  const [cl, setCl] = useState("");
  const [tagLine, setTagLine] = useState("");
  const [batchDate, setBatchDate] = useState<string>("2022-12-12");
  const printRef = React.useRef<HTMLDivElement>(null);
  const [file, setFile] = useState(Img);
  const [popularColors, setPopularColors] = useState([
    "#f44336",
    "#e91e63",
    "#673ab7",
    "#3f51b5",
    "#03a9f4",
    "#00bcd4",
    "#009688",
    "#8bc34a",
    "#cddc39",
    "#ffeb3b",
    "#ffc107",
    "#ff9800",
    "#232323",
  ]);

  const [selectedValue, setSelectedValue] = React.useState("a");
  const [zoom, setZoom] = React.useState(false);

  useEffect(() => {
    setColor(G && G.color);
    setBottleName(G && G.bottleName);
    setBottleType(G && G.bottleType);
    setVol(G && G.vol);
    setCl(G && G.cl);
    setTagLine(G && G.tagLine);
    setBatchDate(G && G.batchDate);
    console.log(G.file === "");

    if (G.file !== "") {
      setFile(G && G.file);
    }
    // console.log("G.file", G.file);
  }, []);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const zoomIn = () => {
    handleClickOpen();
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };
  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleRadioChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });
  const updateBottleName = (event: any) => {
    const text = event.target.value;
    if (text.length > 32) return;
    setBottleName(text);
    update({
      bottleName: text,
    });
  };

  const updateBottleType = (event: any) => {
    const text = event.target.value;
    if (text.length > 32) return;
    setBottleType(text);
    update({
      bottleType: text,
    });
  };
  const updateVol = (event: any) => {
    const re = /^[0-9\b]+$/; // re.test(event.target.value)

    if (event.target.value.length <= 5) {
      const text = event.target.value;
      setVol(text);
      update({
        vol: text,
      });
    }
  };

  const updateCl = (event: any) => {
    const re = /^[0-9\b]+$/; // || re.test(event.target.value)
    if (event.target.value.length <= 5) {
      const text = event.target.value;
      setCl(text);
      update({
        cl: text,
      });
    }
  };

  const updateTagLine = (event: any) => {
    const text = event.target.value;
    if (text.length > 64) return;
    setTagLine(text);
    update({
      tagLine: text,
    });
  };

  const onColorChange = (color: any, event: any) => {
    const text = color.hex;
    setColor(text);
    update({
      color: text,
    });
  };

  const setNewColor = (color: any) => {
    const text = color;
    setColor(text);
    update({
      color: text,
    });
    var tmpArr = popularColors;
    // console.log(tmpArr);
    // tmpArr.push(text);
    // setPopularColors(tmpArr);
  };

  const handleChange = (e: any) => {
    const imageUrl: any = URL.createObjectURL(e.target.files[0]);
    setFile(imageUrl);
    update({ file: imageUrl, curImageX: 0, curImageY: 0 });
  };

  const toOrderPage = () => {
    update({
      bottleName: bottleName,
      bottleType: bottleType,
      cl: cl,
      vol: vol,
      tagLine: tagLine,
      batchDate: batchDate,
      color: color,
      file: file,
    });
    navigate("/order");
  };

  const setDate = (e: any) => {
    setBatchDate(String(e));
    update({
      batchDate: String(e),
    });
  };

  const leftLabel = () => {
    let tmp = G && G.curLabel;
    tmp -= 1;
    if (tmp === 0) tmp = 30;
    if (tmp == 23) tmp = 22;
    update({
      curLabel: tmp,
    });
  };
  const rightLabel = () => {
    let tmp = G && G.curLabel;
    tmp += 1;
    if (tmp === 31) tmp = 1;
    if (tmp == 23) tmp = 24;
    update({
      curLabel: tmp,
    });
  };

  return (
    <div className="editor">
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
      <div className="container">
        <div className="row">
          <div
            className="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-xs-12"
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
            }}
          >
            <h1 className="gradient-h1">{T("home.header")}</h1>
            <span className="h2">{T("home.content")}</span>
            <Row style={{ marginTop: "20px" }}>
              <span className="h4">{T("home.side")}</span>
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  sx={{ marginLeft: "10px" }}
                >
                  <Radio
                    {...controlProps("a")}
                    sx={{
                      color: "#FEA150",
                      "&.Mui-checked": {
                        color: "#EE9140",
                      },
                    }}
                  />
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                      margin: "0 3px",
                    }}
                  >
                    {T("home.front")}
                  </p>
                  {/* <Radio
                    {...controlProps("b")}
                    sx={{
                      color: "#FEA150",
                      "&.Mui-checked": {
                        color: "#EE9140",
                      },
                    }}
                  />
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                      margin: "0 3px",
                    }}
                  >
                    {T("home.back")}
                  </p> */}
                </RadioGroup>
              </FormControl>
            </Row>
            <Row style={{ marginTop: "20px" }}>
              <Col className="col-6">
                <span className="h4"> {T("home.bottlename")}</span>
                <input
                  type="text"
                  onChange={updateBottleName}
                  value={bottleName}
                />
              </Col>
              <Col className="col-6">
                <span className="h4">{T("home.bottletype")}</span>
                <input
                  type="text"
                  name="site_name"
                  value={bottleType}
                  onChange={updateBottleType}
                />
              </Col>
            </Row>

            <Row style={{ marginTop: "20px" }}>
              <Col className="col-12">
                <span className="h4">{T("home.tagline")}</span>
                <input type="text" onChange={updateTagLine} value={tagLine} />
              </Col>
            </Row>

            <Row style={{ marginTop: "20px" }}>
              <Col className="col-3">
                <span className="h4">{T("home.acl")}</span>
                <input type="text" value={vol} onChange={updateVol} />
              </Col>
              <Col className="col-3">
                <span className="h4">{T("home.vol")}</span>
                <input type="text" value={cl} onChange={updateCl} />
              </Col>
              <Col className="col-6">
                <span className="h4">{T("home.date")}</span>
                <DatePicker
                  bordered={false}
                  onChange={(e) => setDate(String(e?.format("YYYY/MM/DD")))}
                />
              </Col>
            </Row>

            <Row style={{ marginTop: "20px" }}>
              <span className="h4" style={{ marginBottom: "15px" }}>
                {T("home.color")}
              </span>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  // background: "#000000",
                  borderRadius: "10px",
                }}
              >
                <CirclePicker
                  width="100%"
                  circleSize={14}
                  colors={[
                    "#f44336",
                    "#e91e63",
                    "#673ab7",
                    "#3f51b5",
                    "#03a9f4",
                    "#00bcd4",
                    "#009688",
                    "#8bc34a",
                    "#cddc39",
                    "#ffeb3b",
                    "#ffc107",
                    "#ff9800",
                    "#232323",
                  ]}
                  onChange={onColorChange}
                />
                <button
                  style={{
                    background: "transparent",
                    border: "none",
                    padding: "0 5px",
                  }}
                >
                  {/* <SettingsOutlinedIcon
                    sx={{ fontSize: "18px", color: "#354832" }}
                  ></SettingsOutlinedIcon> */}
                  <input
                    type="color"
                    value={color}
                    onChange={(e) => setNewColor(e.target.value)}
                    style={{
                      width: "25px",
                      height: "25px",
                      padding: "5px 5px",
                    }}
                  ></input>{" "}
                </button>
              </div>
            </Row>
            <Row
              style={{
                marginTop: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Col className="col-6">
                <button
                  style={{
                    width: "100%",
                    fontSize: "14px",
                    fontWeight: "900",
                    padding: "15px 25px",
                    color: "white",
                    backgroundColor: "#FEA150",
                    border: "none",
                    borderRadius: "50px",
                    textDecoration: "none",
                  }}
                  onClick={toOrderPage}
                >
                  {T("home.button")}
                </button>
              </Col>

              <Col className="col-6"></Col>
            </Row>
          </div>
          <div
            className="col-xl-8 col-lg-12 col-md-12 col-sm-12 col-xs-12"
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <div
              className="col-4"
              style={{ height: "100%", textAlign: "right" }}
            >
              <div style={{ width: "100%", height: "60%" }}></div>

              <button
                style={{
                  borderRadius: "30px",
                  width: "50px",
                  height: "50px",
                  backgroundColor: "#FFFFFF",
                  color: "#FEA150",
                  borderColor: "#FEA150",
                  border: "2px",
                  boxShadow: "0 0 0 5px #55555550",
                }}
                onClick={leftLabel}
              >
                <WestIcon />
              </button>
            </div>
            <div className="col-4 bottle-div">
              <div className="bottle">
                <div
                  style={{
                    width: "100%",
                    height: "55%",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "end",
                  }}
                >
                  <button
                    style={{
                      borderRadius: "30px",
                      width: "50px",
                      height: "50px",
                      backgroundColor: "#FFFFFF",
                      color: "#FEA150",
                      borderColor: "#FEA150",
                      border: "2px",
                      boxShadow: "0 0 0 5px #55555550",
                    }}
                    onClick={zoomIn}
                  >
                    <ZoomInIcon />
                  </button>
                </div>
                <div ref={printRef} style={{ height: "150px" }}>
                  {G.curLabel === 0 ? (
                    <SLabel1
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      // file={file}
                    />
                  ) : G.curLabel === 1 ? (
                    <Label1
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      // file={file}
                    />
                  ) : G.curLabel === 2 ? (
                    <Label2
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      // file={file}
                    />
                  ) : G.curLabel === 3 ? (
                    <Label3
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      file={file}
                    />
                  ) : G.curLabel === 4 ? (
                    <Label4
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      file={file}
                    />
                  ) : G.curLabel === 5 ? (
                    <Label5
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      file={file}
                    />
                  ) : G.curLabel === 6 ? (
                    <Label6
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      file={file}
                    />
                  ) : G.curLabel === 7 ? (
                    <Label7
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      file={file}
                    />
                  ) : G.curLabel === 8 ? (
                    <Label8
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      file={file}
                    />
                  ) : G.curLabel === 9 ? (
                    <Label9
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      file={file}
                    />
                  ) : G.curLabel === 10 ? (
                    <Label10
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      file={file}
                    />
                  ) : G.curLabel === 11 ? (
                    <Label11
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      file={file}
                    />
                  ) : G.curLabel === 12 ? (
                    <Label12
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      file={file}
                    />
                  ) : G.curLabel === 13 ? (
                    <Label13
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      file={file}
                    />
                  ) : G.curLabel === 14 ? (
                    <Label14
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      file={file}
                    />
                  ) : G.curLabel === 15 ? (
                    <Label15
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      file={file}
                    />
                  ) : G.curLabel === 16 ? (
                    <Label16
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      file={file}
                    />
                  ) : G.curLabel === 17 ? (
                    <Label17
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      file={file}
                    />
                  ) : G.curLabel === 18 ? (
                    <Label18
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      file={file}
                    />
                  ) : G.curLabel === 19 ? (
                    <Label19
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      file={file}
                    />
                  ) : G.curLabel === 20 ? (
                    <Label20
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      file={file}
                    />
                  ) : G.curLabel === 21 ? (
                    <Label21
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      file={file}
                    />
                  ) : G.curLabel === 22 ? (
                    <Label22
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      file={file}
                    />
                  ) : G.curLabel === 23 ? (
                    <Label23
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      file={file}
                    />
                  ) : G.curLabel === 24 ? (
                    <Label24
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      file={file}
                    />
                  ) : G.curLabel === 25 ? (
                    <Label25
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      file={file}
                    />
                  ) : G.curLabel === 26 ? (
                    <Label26
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      file={file}
                    />
                  ) : G.curLabel === 27 ? (
                    <Label27
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      file={file}
                    />
                  ) : G.curLabel === 28 ? (
                    <Label28
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      file={file}
                    />
                  ) : G.curLabel === 29 ? (
                    <Label29
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      file={file}
                    />
                  ) : (
                    <Label30
                      bottleName={bottleName}
                      vol={vol}
                      cl={cl}
                      tagLine={tagLine}
                      color={color}
                      batchDate={batchDate}
                      bottleType={bottleType}
                      file={file}
                    />
                  )}
                </div>
                <div className="overlay"></div>
              </div>
              {G.curLabel === 31 && (
                <Button
                  variant="contained"
                  component="label"
                  style={{ backgroundColor: "#ff3333", marginTop: "10px" }}
                >
                  {T("home.upload")}
                  <input
                    hidden
                    accept="image/*"
                    type="file"
                    onChange={handleChange}
                  />
                </Button>
              )}
            </div>
            <div
              className="col-4"
              style={{ height: "100%", textAlign: "left" }}
            >
              <div style={{ width: "100%", height: "60%" }}></div>

              <button
                style={{
                  borderRadius: "30px",
                  width: "50px",
                  height: "50px",
                  backgroundColor: "#FFFFFF",
                  color: "#FEA150",
                  borderColor: "#FEA150",
                  border: "2px",
                  boxShadow: "0 0 0 5px #55555550",
                }}
                onClick={rightLabel}
              >
                <EastIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
