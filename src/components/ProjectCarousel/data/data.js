// export array of objects with the following properties:
// - img
// - label
// import project images for insulation, metal, shingle, and siding from projectData directory
import insulationImages from "src/projectData/insulation/data/recentProjectData";
import metalImages from "src/projectData/metal/data/recentProjectData";
import shingleImages from "src/projectData/shingle/data/recentProjectData";
import sidingImages from "src/projectData/siding/data/recentProjectData";

// Data Array
const data = [
  ...insulationImages,
  ...metalImages,
  ...shingleImages,
  ...sidingImages,
];

export default data;
