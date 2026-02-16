import { useMemo } from "react";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  ClassicEditor,
  Essentials,
  Paragraph,
  GeneralHtmlSupport,
  Table,
  TableProperties,
} from "ckeditor5";

import "ckeditor5/ckeditor5.css";

function Editor({ onChange, onReady }) {
  const config = useMemo(() => {
    return {
      licenseKey: "GPL",
      plugins: [
        Essentials,
        Paragraph,
        GeneralHtmlSupport,
        Table,
        TableProperties,
      ],
      initialData: `
        <div style="background: linear-gradient(90deg,rgba(161, 29, 125, 0.55) 0%, rgba(24, 33, 104, 0.75) 100%); padding: 2em;">Liniar gradient.</div>
      `,
      table: {
        tableProperties: {
          colorPicker: { format: "hex" },
          defaultProperties: {
            borderWidth: "1px",
            borderStyle: "solid",
          },
        },
        tableCellProperties: {
          colorPicker: { format: "hex" },
          defaultProperties: {
            padding: "2em",
            borderWidth: "1px",
            borderStyle: "solid",
            verticalAlignment: "none",
            horizontalAlignment: "none",
          },
        },
      },
      htmlSupport: {
        allow: [
          {
            name: "div",
            styles: ["background", "padding"],
          },
        ],
      },
    };
  }, []);

  return (
    <CKEditor
      editor={ClassicEditor}
      config={config}
      onChange={onChange}
      onReady={onReady}
    />
  );
}

export default Editor;
