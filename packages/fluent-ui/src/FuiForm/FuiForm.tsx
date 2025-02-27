import { ComponentType } from "react";
import { withTheme, FormProps } from "@rjsf/core";

import Theme from "../Theme";

const FuiForm: ComponentType<FormProps> = withTheme(Theme);

export default FuiForm;
