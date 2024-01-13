import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Button,
  Typography,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import "./Calci.css";

const Calci = () => {
  const [packetType, setPacketType] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [weight, setWeight] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [deliveryOption, setDeliveryOption] = useState("standard");
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState("");

  const calculateResult = () => {
    if (
      !packetType ||
      !selectedCountry ||
      !weight ||
      !length ||
      !width ||
      !height ||
      !inputValue
    ) {
      setResult("Please fill in all required fields.");
      return;
    }

    const parsedWeight = parseFloat(weight);
    const parsedLength = parseFloat(length);
    const parsedWidth = parseFloat(width);
    const parsedHeight = parseFloat(height);

    if (
      isNaN(parsedWeight) ||
      parsedWeight <= 0 ||
      isNaN(parsedLength) ||
      parsedLength <= 0 ||
      isNaN(parsedWidth) ||
      parsedWidth <= 0 ||
      isNaN(parsedHeight) ||
      parsedHeight <= 0
    ) {
      setResult("Please enter valid weight and dimensions.");
      return;
    }

    let shippingCost = 0;

    switch (packetType) {
      case "standard":
        shippingCost =
          parsedWeight * parsedLength * parsedWidth * parsedHeight * 0.1; // Replace 0.1 with your actual rate
        break;
      case "express":
        shippingCost =
          parsedWeight * parsedLength * parsedWidth * parsedHeight * 0.2; // Replace 0.2 with your actual rate
        break;
      default:
        setResult("Invalid packet type.");
        return;
    }

    setResult(
      `Shipping cost to ${selectedCountry} for ${packetType} (${parsedWeight} kg, ${parsedLength} x ${parsedWidth} x ${parsedHeight} cm): $${shippingCost.toFixed(
        2
      )}`
    );

    handleOpen();
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="sm" className="calculator-container">
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        className="calculator-title"
      >
        Shipping Cost Calculator
      </Typography>

      <FormControl fullWidth className="calculator-form-control">
        <InputLabel>Packet Type</InputLabel>
        <Select
          value={packetType}
          label="Packet Type"
          onChange={(e) => setPacketType(e.target.value)}
        >
          <MenuItem value="">Select Packet Type</MenuItem>
          <MenuItem value="standard">Standard</MenuItem>
          <MenuItem value="express">Express</MenuItem>
          {/* Add more options if needed */}
        </Select>
      </FormControl>

      <TextField
        fullWidth
        label="Country"
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
        sx={{ marginBottom: 2 }}
      />

      <TextField
        fullWidth
        label="Weight (kg)"
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        sx={{ marginBottom: 2 }}
      />

      <TextField
        fullWidth
        label="Length (cm)"
        type="number"
        value={length}
        onChange={(e) => setLength(e.target.value)}
        sx={{ marginBottom: 2 }}
      />

      <TextField
        fullWidth
        label="Width (cm)"
        type="number"
        value={width}
        onChange={(e) => setWidth(e.target.value)}
        sx={{ marginBottom: 2 }}
      />

      <TextField
        fullWidth
        label="Height (cm)"
        type="number"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        sx={{ marginBottom: 2 }}
      />

      <TextField
        fullWidth
        label="Additional Input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        sx={{ marginBottom: 2 }}
      />

      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel>Delivery Option</InputLabel>
        <Select
          value={deliveryOption}
          label="Delivery Option"
          onChange={(e) => setDeliveryOption(e.target.value)}
        >
          <MenuItem value="standard">Standard</MenuItem>
          <MenuItem value="express">Express</MenuItem>
          {/* Add more options if needed */}
        </Select>
      </FormControl>

      <Button
        variant="contained"
        onClick={calculateResult}
        className="calculate-button"
      >
        Calculate Shipping Cost
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className="dialog-title">Shipping Cost Result</DialogTitle>
        <DialogContent>
          <Typography
            variant="body1"
            color={result.includes("Error") ? "error" : "textPrimary"}
            className="result-text"
          >
            {result}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} className="close-button">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Calci;
