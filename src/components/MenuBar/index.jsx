import React from 'react';
import { PropTypes } from 'prop-types';

import { StyledMenuBar, HomeLi, Li, MoreVisibleLi, HomeA, Em, A } from './style';

export default function MenuBar() {
  return (
    <StyledMenuBar>
      <HomeLi>
        <HomeA>홈</HomeA>
      </HomeLi>
      <Li>
        <A>채용</A>
      </Li>
      <Li>
        <A>이벤트</A>
      </Li>
      <MoreVisibleLi>
        <A>직군별 연봉</A>
      </MoreVisibleLi>
      <MoreVisibleLi>
        <A>이력서</A>
      </MoreVisibleLi>
      <MoreVisibleLi>
        <A>
          커뮤니티
          <TextEm content="New" />
        </A>
      </MoreVisibleLi>
      <MoreVisibleLi>
        <A>프리랜서</A>
      </MoreVisibleLi>
      <MoreVisibleLi>
        <A>
          AI 합격예측
          <TextEm content="Beta" />
        </A>
      </MoreVisibleLi>
    </StyledMenuBar>
  );
}

function TextEm({ content }) {
  return (
    <Em>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="11" viewBox="0 0 18 11">
        <g
          fill="none"
          fillRule="evenodd"
          fontFamily="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo"
          fontSize="9"
          fontWeight="500"
        >
          <g fill="#36F">
            <g>
              <g>
                <g>
                  <g>
                    <g>
                      <g>
                        <text transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)">
                          <tspan x="0" y="8">
                            {content}
                          </tspan>
                        </text>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </Em>
  );
}

TextEm.propTypes = {
  content: PropTypes.string.isRequired,
};
