const moihelp = require("..");
const { toCapitalize, JSONtoCSV, CSVToJSON, isJson,hashNode } = moihelp;

describe("Testing for the npm package moihelp", () => {
  describe("General Helpers", () => {
    describe("toCapitalize", () => {
      it("Should return a String with the 1st Character is Uppercase", () => {
        expect(toCapitalize("moikapy")).toBe("Moikapy");
      });
    });
    describe("copyToClipboard", () => {});
    describe("CSVToJSON", () => {
      it("should convert csv String to json", () => {
        const json = CSVToJSON(
          'id,label\n"Open",""\n"OpenNew","Open New"\n"ZoomIn","Zoom In"\n"ZoomOut","Zoom Out"\n"OriginalView","Original View"\n"Quality",""\n"Pause",""\n"Mute",""\n"Find","Find..."\n"FindAgain","Find Again"\n"Copy",""\n"CopyAgain","Copy Again"\n"CopySVG","Copy SVG"\n"ViewSVG","View SVG"\n"ViewSource","View Source"\n"SaveAs","Save As"\n"Help",""\n"About","About Adobe CVG Viewer..."'
        );
        expect([
          { id: "Open", label: "" },
          { id: "OpenNew", label: "Open New" },
          { id: "ZoomIn", label: "Zoom In" },
          { id: "ZoomOut", label: "Zoom Out" },
          { id: "OriginalView", label: "Original View" },
          { id: "Quality", label: "" },
          { id: "Pause", label: "" },
          { id: "Mute", label: "" },
          { id: "Find", label: "Find..." },
          { id: "FindAgain", label: "Find Again" },
          { id: "Copy", label: "" },
          { id: "CopyAgain", label: "Copy Again" },
          { id: "CopySVG", label: "Copy SVG" },
          { id: "ViewSVG", label: "View SVG" },
          { id: "ViewSource", label: "View Source" },
          { id: "SaveAs", label: "Save As" },
          { id: "Help", label: "" },
          { id: "About", label: "About Adobe CVG Viewer..." },
        ]).toEqual(json);
        // console.log(typeof json)
      });
    });
    describe("JSONtoCSV", () => {
      it("should convert JSON to CSV", () => {
        const csv = JSONtoCSV(
          [
            { id: "Open" },
            { id: "OpenNew", label: "Open New" },
            { id: "ZoomIn", label: "Zoom In" },
            { id: "ZoomOut", label: "Zoom Out" },
            { id: "OriginalView", label: "Original View" },
            { id: "Quality" },
            { id: "Pause" },
            { id: "Mute" },
            { id: "Find", label: "Find..." },
            { id: "FindAgain", label: "Find Again" },
            { id: "Copy" },
            { id: "CopyAgain", label: "Copy Again" },
            { id: "CopySVG", label: "Copy SVG" },
            { id: "ViewSVG", label: "View SVG" },
            { id: "ViewSource", label: "View Source" },
            { id: "SaveAs", label: "Save As" },
            { id: "Help" },
            { id: "About", label: "About Adobe CVG Viewer..." },
          ],
          ["id", "label"]
        );
        expect(csv).toBe(
          'id,label\n"Open",""\n"OpenNew","Open New"\n"ZoomIn","Zoom In"\n"ZoomOut","Zoom Out"\n"OriginalView","Original View"\n"Quality",""\n"Pause",""\n"Mute",""\n"Find","Find..."\n"FindAgain","Find Again"\n"Copy",""\n"CopyAgain","Copy Again"\n"CopySVG","Copy SVG"\n"ViewSVG","View SVG"\n"ViewSource","View Source"\n"SaveAs","Save As"\n"Help",""\n"About","About Adobe CVG Viewer..."'
        );
      });
    });
  });
  describe("Array Helpers", () => {
    describe("remove", () => {});
  });
  describe("Date Helpers", () => {
    describe("parseDate", () => {});
  });
  describe("Validators", () => {
    describe("isJson", () => {
      it('should return false when passed a non Json String', () => {
        expect(isJson('kappa')).toBe(false)
      });
      it("should return false when passed an Array", () => {
        expect(isJson(["kappa"])).toBe(false);
      });
      it("should return true when passed an String containing an object", () => {
        expect(isJson('[{ "id": "Open", "label": "" }]')).toBe(true);
      });
    });
    describe("isEven", () => {});
    describe("isWindow", () => {});
  });
  describe("Local Storage", () => {
    describe("setStorage", () => {});
    describe("getStorage", () => {});
    describe("removeStorage", () => {});
    describe("clearStorage", () => {});
  });
  describe("Crypto Helpers", () => {
    describe("hash", () => {});
    describe("hashNode", () => {
      it("should hash a string", async () => {
        const hash = await hashNode("test");
        
        expect(hash).toEqual(
          "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08"
        );
      });     
    });
  });
});
