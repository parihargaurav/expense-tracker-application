import React, { useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext";
import { InnerLayout } from "../../styles/Layouts";
import Form from "../Form/Form";
import IncomeItem from "../IncomeItem/IncomeItem";

function Income() {
  const { addIncome, incomes, getIncomes, deleteIncome, totalIncome } =
    useGlobalContext();

  useEffect(() => {
    getIncomes();
  }, [getIncomes]);
  return (
    <IncomeStyled>
      <InnerLayout>
        <h1>Incomes</h1>
        <h2 className="total-income">
          Total Income: <span>₹{totalIncome()}</span>
        </h2>
        <div className="income-content">
          <div className="form-container">
            <Form />
          </div>
          <div className="incomes">
            {incomes.map((income) => {
              const { _id, title, amount, date, category, description, type } =
                income;
              return (
                <IncomeItem
                  key={_id}
                  id={_id}
                  title={title}
                  description={description}
                  amount={amount}
                  date={date}
                  type={type}
                  category={category}
                  indicatorColor="var(--color-green)"
                  deleteItem={deleteIncome}
                />
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </IncomeStyled>
  );
}

const IncomeStyled = styled.div`
  display: flex;
  overflow: auto;
  flex-direction: column;

  .total-income {
    // Existing styles...
  }

  .income-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media screen and (min-width: 768px) {
      flex-direction: row;
    }

    .form-container {
      // Adjust styles for form container as needed...
    }

    .incomes {
      flex: 1;

      // Additional styles for horizontal view...
      @media screen and (min-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
      }

      .income-item {
        // Adjust styles for individual income item...
        @media screen and (min-width: 768px) {
          flex-basis: calc(33.3333% - 1rem);
          // Adjust flex-basis as needed to accommodate three items in a row
        }
      }
    }
  }
`;



export default Income;
