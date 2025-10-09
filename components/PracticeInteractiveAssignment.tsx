"use client";

import { useMemo, useState } from "react";
type PracticeInteractiveAssignmentProps = {
  content: {
    title: string;
    description: string;
    tasks: {
      id: string;
      question: string;
      options: string[];
      correct: number;
      explanation: string;
    }[];
    submitLabel: string;
    resetLabel: string;
    scoreLabel: (score: number, total: number) => string;
    successMessage: string;
    encouragement: string;
    resultsTitle: string;
  };
};

type AnswersState = Record<string, number | null>;

export function PracticeInteractiveAssignment({ content }: PracticeInteractiveAssignmentProps) {
  const [answers, setAnswers] = useState<AnswersState>(() =>
    Object.fromEntries(content.tasks.map((task) => [task.id, null]))
  );
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => {
    if (!submitted) {
      return 0;
    }
    return content.tasks.reduce((acc, task) => {
      const value = answers[task.id];
      return value === task.correct ? acc + 1 : acc;
    }, 0);
  }, [answers, content.tasks, submitted]);

  const total = content.tasks.length;

  const handleSelect = (taskId: string, optionIndex: number) => {
    setAnswers((prev: AnswersState) => ({
      ...prev,
      [taskId]: optionIndex
    }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleReset = () => {
    setAnswers(Object.fromEntries(content.tasks.map((task) => [task.id, null])));
    setSubmitted(false);
  };

  const allAnswered = useMemo(
    () => content.tasks.every((task) => answers[task.id] !== null),
    [answers, content.tasks]
  );

  return (
    <section className="assignment" aria-live="polite">
      <div className="assignment__header">
        <h2>{content.title}</h2>
        <p>{content.description}</p>
      </div>
      <ol className="assignment__tasks">
        {content.tasks.map((task) => (
          <li key={task.id} className="assignment__task">
            <p className="assignment__question">{task.question}</p>
            <div className="assignment__options">
              {task.options.map((option, index) => (
                <label key={option} className="assignment__option">
                  <input
                    type="radio"
                    name={task.id}
                    value={index}
                    checked={answers[task.id] === index}
                    onChange={() => handleSelect(task.id, index)}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
            {submitted ? (
              <div
                className={`assignment__feedback ${
                  answers[task.id] === task.correct
                    ? "assignment__feedback--success"
                    : "assignment__feedback--info"
                }`}
              >
                {answers[task.id] === task.correct ? "✓" : "•"} {task.explanation}
              </div>
            ) : null}
          </li>
        ))}
      </ol>
      <div className="assignment__actions">
        <button
          type="button"
          className="assignment__button assignment__button--primary"
          onClick={handleSubmit}
          disabled={!allAnswered}
        >
          {content.submitLabel}
        </button>
        <button type="button" className="assignment__button" onClick={handleReset}>
          {content.resetLabel}
        </button>
      </div>
      {submitted ? (
        <div className="assignment__results">
          <strong>{content.resultsTitle}</strong>
          <span>{content.scoreLabel(score, total)}</span>
          <p className="assignment__message">
            {score === total ? content.successMessage : content.encouragement}
          </p>
        </div>
      ) : null}
    </section>
  );
}
