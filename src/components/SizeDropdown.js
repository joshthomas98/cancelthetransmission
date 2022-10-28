import React from "react";

const SizeDropdown = () => {
  return (
    <div>
      <label for="size">Size:</label>

      <select className="text-light ml-2" name="size" id="size">
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
        <option value="xl">XL</option>
      </select>
    </div>
  );
};

export default SizeDropdown;
