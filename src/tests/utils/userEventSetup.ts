// tests/utils/userEventSetup.ts
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';

export function setupUserInteraction(ui: React.ReactElement) {
  const user = userEvent.setup();
  const utils = render(ui);
  return { user, ...utils };
}
//테스트에서 render와 userEvent.setup()을 매번 반복하지 않도록 묶어줍니다.
