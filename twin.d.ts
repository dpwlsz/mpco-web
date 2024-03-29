// eslint-disable-next-line import/no-extraneous-dependencies
import 'twin.macro';

import { css as cssImport } from '@emotion/react';
import styledImport from '@emotion/styled';

declare module 'twin.macro' {
	// The styled and css imports
	const styled: typeof styledImport;
	const css: typeof cssImport;
}
