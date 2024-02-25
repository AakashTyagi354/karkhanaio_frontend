const formatRupee = (amount) => {
  // Convert the number to a string and split it into integer and decimal parts
  const parts = amount.toString().split(".");

  // Format the integer part with commas for thousands separation
  const formattedInteger = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // Return the formatted amount with Rupee symbol and decimal part if present
  return "\u20B9 " + formattedInteger + (parts[1] ? "." + parts[1] : "");
};

export default formatRupee;
