import url from '../../../apis/url';
import { StringSetting } from '../../../config/Setting';
import React from 'react';

export default {
  ...url,
  ...StringSetting,

  ENGLISH: 'Tiếng Anh',
  VIETNAMESE: 'Tiếng Việt',
};
// i18n.t('expired')
