import { useMemo } from "react";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import { ClassicEditor, Essentials, Paragraph } from "ckeditor5";

import "ckeditor5/ckeditor5.css";

function Editor({ onChange, onReady }) {
  const config = useMemo(() => {
    return {
      licenseKey: "GPL",
      plugins: [Essentials, Paragraph],
      initialData: "<p>Hello from CKEditor 5!</p>",
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
