import React from 'react';
import Progress from './progress';
import ListItem from './list_item';

const Skills = ({ data }) => (
  <section>
    <h1 className="section-header">Skills</h1>
    {data.map(skill => (
      <div key={skill.title} className="my-5" text-4x1>
        <h2 className="item-header font-semibold text-lg mb-2">
          {skill.title}
        </h2>
        {skill.subskills.map(subskill => (
          <span key={subskill.name}>
            {skill.type === 'tag' && (
              <span key={subskill.name} className="tag">
                {subskill.name}
              </span>
            )}
            {skill.type === 'list' && (
              <ListItem key={subskill.name} text={subskill.name} />
            )}
          </span>
        ))}
      </div>
    ))}
  </section>
);

export default Skills;
