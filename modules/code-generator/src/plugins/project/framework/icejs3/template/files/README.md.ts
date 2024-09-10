import { ResultFile } from '@lce/lowcode-types';
import { createResultFile } from '../../../../../../utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
  const file = createResultFile(
    'README',
    'md',
    'This project is generated by lowcode-code-generator & lowcode-solution-icejs3.',
  );

  return [[], file];
}
