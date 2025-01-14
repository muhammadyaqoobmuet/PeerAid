package com.peeraid.backend.Repository;

import com.peeraid.backend.models.User;
import com.peeraid.backend.models.UserRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRequestRepo extends JpaRepository<UserRequest,Long> {
    Optional<UserRequest> findByRequestId(long requestID);

    List<UserRequest> findAllByLender(User lender);

    List<UserRequest> findAllByBorrower(User borrower);
}
