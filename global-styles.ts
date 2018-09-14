import internalReset from "./assets/internal-reset";

import { injectGlobal } from "styled-components";

const injectStyleGlobally =
    injectGlobal`
	/* do internal reset!! */
	${internalReset}

	html {
		background-color: #fff;
	}
`;

export default injectStyleGlobally;
